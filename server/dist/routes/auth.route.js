"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/login", (req, res) => {
    res.send("Login POST endpoint");
});
router.post("/register", (req, res) => {
    res.send("Register POST endpoint");
});
