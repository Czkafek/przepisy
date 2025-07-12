import { Router, Request, Response } from "express";
import { createLoginChain, createRegisterChain } from '../utils/validation';
import checkValidation from "../utils/checkValidation";
import supabase from "../utils/db";

const router = Router();

router.get("/", (req, res) => {
    res.send("User GET endpoint");
});
// LOGIN endpoint
router.post("/login", createLoginChain(), checkValidation, async (req :Request, res :Response) => {
    
    const { data, error } = await supabase.from('users').select().eq("name", req.body.login);
    if(error){
        res.status(400).json({ seuccess: false, error });
        return;
    }
    if(data.length < 1) {
        res.status(404).json({ success: false, message: 'no records found' });
        return;
    }
    if(req.body.password === data[0].password) {
        res.status(200).json({ success: true, data });
        return;
    }
    res.status(401).json({ success: false, message: 'invalid password' });
});
// REGISTER endpoint
router.post("/register", createRegisterChain(), checkValidation, (req :Request, res :Response) => {

});



export default router;