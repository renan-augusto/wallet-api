import express from 'express';
import authRouter from './routes/authRoutes.js';

const app = express();

app.arguments(authRouter);

app.listen(5000, () => console.log("Server listening in port 5000"));

