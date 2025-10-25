import express from 'express';
import animalsRoutes from './routes/animals.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import cors from 'cors';
import { FRONTEND_URL } from './config/env.js';

const app = express();
app.use(cors({
  origin: FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Register animal routes
app.use("/animals", animalsRoutes);

// Global error handling middleware
app.use(errorHandler);

export default app;