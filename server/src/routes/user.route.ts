import { Router, Request, Response } from "express";
import { createLoginChain, createRegisterChain } from '../utils/validation';
import checkValidation from "../utils/checkValidation";

const router = Router();

router.get("/", (req, res) => {
    res.send("User GET endpoint");
});
// LOGIN endpoint
router.post("/login", createLoginChain(), checkValidation,  async (req :Request, res :Response) => {

});
// REGISTER endpoint
router.post("/register", createRegisterChain(), checkValidation, (req :Request, res :Response) => {

});



export default router;