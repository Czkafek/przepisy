import express from "express";
import cors from 'cors';
import UserRouter from "./routes/user.route"
import AuthRouter from "./routes/auth.route"
import supabase from "./utils/db";
import cookieParser from 'cookie-parser'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'POST', 'DELETE', 'UPDATE', 'PATCH']
}));
app.use("/user", UserRouter);
app.use("/auth", AuthRouter);

app.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").select("*");
        if (error) {
            console.error("Supabase error:", error);
            res.status(400).json({error: error.message });
            return;
        }
        res.status(200).send(data);
    } catch (error:unknown) {
        if (typeof error === "string")
            res.status(400).json({ error: error });
        else if (error instanceof Error)
            res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});