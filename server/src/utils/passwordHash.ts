import bcrypt from 'bcrypt';
import { check } from 'express-validator';

const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, 10);
}

const checkPassword = (hash: string, checkPassword: string) => {
    return bcrypt.compareSync(checkPassword, hash);
}

export { hashPassword, checkPassword };