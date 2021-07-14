import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import { routes } from './routes';

import './database';

import { middlewareError } from './middlewares/Error/Error';

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewareError);

export { app };