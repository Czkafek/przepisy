import { Router, Request, Response } from "express";
import { createLoginChain, createRegisterChain } from '../utils/validation';
import checkValidation from "../utils/checkValidation";
import supabase from "../utils/db";
import { checkPassword, hashPassword } from "../utils/passwordHash";
import { createAccessToken, createRefreshToken } from "../utils/jwt";

const router = Router();

router.get("/", (req, res) => {
    res.send("User GET endpoint");
});
// LOGIN endpoint
router.post("/login", createLoginChain(), checkValidation, async (req :Request, res :Response) => {
    const isEmail = req.body.login.includes('@');
    const field = isEmail ? 'email' : 'name';
    const { data, error } = await supabase.from('users').select().eq(field, req.body.login);
    
    if(error){
        res.status(400).json({ seuccess: false, error });
        return;
    }
    if(data.length < 1) {
        res.status(404).json({ success: false, message: 'no records found' });
        return;
    }
    if(await checkPassword(data[0].password, req.body.password)) {
        const token = createAccessToken(data[0].id);
        res.cookie("refreshToken", createRefreshToken(data[0].id), { httpOnly: true });
        res.status(200).json({ success: true, data, accessToken: token });
        return;
    }
    res.status(401).json({ success: false, message: 'invalid password' });
});
// REGISTER endpoint
router.post("/register", createRegisterChain(), checkValidation, async (req :Request, res :Response) => {
    const nameResult = await supabase.from('users').select().eq('name', req.body.name);
    const emailResult = await supabase.from('users').select().eq('email', req.body.email);
    //const { data, error } = await supabase.from('users').select().or(`name.eq.${req.body.name},email.eq.${req.body.email}`);
    if(nameResult.error || emailResult.error){
        res.status(400).json({ seuccess: false, 'nameResult.error': nameResult.error, 'emailResult.error': emailResult.error });
        return;
    }
    if(nameResult.data.length > 0) {
        res.status(409).json({ success: false, message: "username already in use"});
        return;
    }
    if(emailResult.data.length > 0) {
        res.status(409).json({ success: false, message: "email already in use"});
        return;
    }
    const { data, error } = await supabase.from("users").insert({ name: req.body.name, email: req.body.email, password: hashPassword(req.body.password)});
    if(error){
        res.status(400).json({ success: false, error });
        return;
    }
    res.status(200).json({ success: true, data });
});



export default router;