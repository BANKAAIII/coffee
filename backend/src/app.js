import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
//import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/api/v1", routes);  // all routes prefixed with /api

// Global Error Handler
// app.use(errorHandler);

export default app;
