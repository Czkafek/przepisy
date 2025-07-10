import { Result, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

const checkValidation = (req :Request, res :Response, next :NextFunction) => {
    const errors : Result = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ success: false,  errors: errors.array() });
        return;
    }
    next();
}

export default checkValidation;