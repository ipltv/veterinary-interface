import express from 'express';
import animalsRoutes from './routes/animals.routes.js';

const app = express();

// Register animal routes
app.use("/animals", animalsRoutes);

export default app;