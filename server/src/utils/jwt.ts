import jwt from 'jsonwebtoken';
import fs from 'fs'
import path from 'path';

const createAccessToken = (userId: number) => {
    const privateKey = fs.readFileSync(path.join(__dirname, "../../keys/priv.pem"), "utf-8");
    return jwt.sign({ userId }, privateKey, {
        algorithm: "RS256",
        expiresIn: "2m"
    })
};

const createRefreshToken = (userId: number) => {
    const privateKey = fs.readFileSync(path.join(__dirname, "../../keys/priv.pem"), "utf-8");
    return jwt.sign({ userId }, privateKey, {
        algorithm: "RS256",
        expiresIn: "5m"
    })
};

export { createAccessToken, createRefreshToken };