"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const db_1 = __importDefault(require("./utils/db"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/user", user_route_1.default);
app.use("/auth", auth_route_1.default);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield db_1.default.from("users").select("*");
        if (error) {
            console.error("Supabase error:", error);
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).send(data);
    }
    catch (error) {
        if (typeof error === "string")
            res.status(400).json({ error: error });
        else if (error instanceof Error)
            res.status(400).json({ error: error.message });
    }
}));
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});
