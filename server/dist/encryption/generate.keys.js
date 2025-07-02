"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
// Logika tworząca klucz publiczny i prywatny do rozszerzenia .pem
// Trzeba dodać te pliki do .gitignore
function createKeyPair() {
    try {
        const keys = (0, crypto_1.generateKeyPairSync)("rsa", {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            }
        });
        const publicPath = path_1.default.join("keys", '/pub.pem');
        const privatePath = path_1.default.join("keys", '/priv.pem');
        if (fs_1.default.existsSync(publicPath) || fs_1.default.existsSync(privatePath)) {
            console.log("Klucze już istnieją - nadpisywanie...");
        }
        console.log("Saving the keys...");
        fs_1.default.writeFileSync(publicPath, keys.publicKey);
        console.log("Public Key has been saved");
        fs_1.default.writeFileSync(privatePath, keys.privateKey);
        console.log("Private Key has been saved");
        console.log("Both Keys has been successfully saved");
    }
    catch (error) {
        error instanceof Error ? console.error("Error: ", error.message) : console.error("Error: ", String(error));
    }
}
createKeyPair();
