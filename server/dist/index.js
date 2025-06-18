"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/user", user_route_1.default);
app.get("/", (req, res) => {
    res.send("Hi! Typescript is working!");
});
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});
