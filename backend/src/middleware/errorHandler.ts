// middleware/errorHandler.ts
import type { Request, Response, NextFunction } from 'express';
import { NODE_ENV } from '../config/env.js';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): Response => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    if (NODE_ENV == "development"){
        console.log(err);
    }
    return res.status(status).json({ message });
}