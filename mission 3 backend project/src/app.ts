import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRoutes from './app/users/users.routes';

app.use('/api/v1/users', userRoutes);

export default app;
