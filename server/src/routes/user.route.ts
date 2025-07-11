import { Router, Request, Response } from "express";
import { createLoginChain, createRegisterChain } from '../utils/validation';
import checkValidation from "../utils/checkValidation";
import supabase from "../utils/db";

const router = Router();

router.get("/", (req, res) => {
    res.send("User GET endpoint");
});
// LOGIN endpoint
router.post("/login", createLoginChain(), checkValidation,  async (req :Request, res :Response) => {
    const { data, error } = await supabase.from('users').select().eq('name', req.login);
});
// REGISTER endpoint
router.post("/register", createRegisterChain(), checkValidation, (req :Request, res :Response) => {

});



export default router;