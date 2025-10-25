import express from 'express';
import animalsRoutes from './routes/animals.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Register animal routes
app.use("/animals", animalsRoutes);

// Global error handling middleware
app.use(errorHandler);

export default app;