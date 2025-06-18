import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("User GET endpoint");
});

export default router;