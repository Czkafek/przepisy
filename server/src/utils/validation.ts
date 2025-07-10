import { body } from 'express-validator'

const createRegisterChain = () => [
    body('username')
        .notEmpty().withMessage("Username is required")
        .isLength({ min: 3, max: 50}).withMessage("Username must be between 3 and 50 characters long")
        .matches(/^[a-zA-Z0-9._]+$/),
    body('email')
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Must be valid email")
        .normalizeEmail()
        .isLength({ max: 254 }).withMessage("Email is too long - max 254 characters"),
    body('password')
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 8, max: 128}).withMessage("Password must between 8 and 128 characters long")
]

export default { createRegisterChain };