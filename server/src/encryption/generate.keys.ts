import fs from "fs";
import path from "path";
import { generateKeyPairSync } from "crypto";
// Logika tworząca klucz publiczny i prywatny do rozszerzenia .pem
// Trzeba dodać te pliki do .gitignore

function createKeyPair() {
    try {
        const keys = generateKeyPairSync("rsa", {
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

        const publicPath = path.join("keys", '/pub.pem');
        const privatePath = path.join("keys", '/priv.pem');

        if(fs.existsSync(publicPath) || fs.existsSync(privatePath)) {
            console.log("Klucze już istnieją - nadpisywanie...")
        }

        console.log("Saving the keys...");

        fs.writeFileSync(publicPath, keys.publicKey);
        console.log("Public Key has been saved");

        fs.writeFileSync(privatePath, keys.privateKey);
        console.log("Private Key has been saved");

        console.log("Both Keys has been successfully saved");
    } catch (error) {
        error instanceof Error ? console.error("Error: ", error.message) : console.error("Error: ", String(error));
    }
}

createKeyPair();