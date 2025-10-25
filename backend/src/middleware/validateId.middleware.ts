// middleware/validateId.middleware.ts
import type { Request, Response, NextFunction } from 'express';

// Middleware to validate that the ID parameter is a valid number
export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    // Check if it's not a number, not an integer, or not a positive number.
    if (isNaN(id) || !Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ message: 'ID must be a positive integer.' });
    }
    next();
};