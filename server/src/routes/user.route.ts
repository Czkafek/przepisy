import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("User GET endpoint");
});
// LOGIN endpoint
router.post("/login",  async (req, res) => {

});
// REGISTER endpoint
router.post("register", (req, res) => {

});



export default router;