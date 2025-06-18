import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
    res.send("Login GET endpoint");
});

router.get("/register", (req, res) => {
    res.send("Register GET endpoint");
});

export default router;