import express from "express";
import UserRouter from "./routes/user.route"
import AuthRouter from "./routes/auth.route"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/user", UserRouter);
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
    res.send("Hi! Typescript is working!");
});

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});