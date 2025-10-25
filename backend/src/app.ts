import express from 'express';
import animalsRoutes from './routes/animals.routes.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Register animal routes
app.use("/animals", animalsRoutes);

export default app;