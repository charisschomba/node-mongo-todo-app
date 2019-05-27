import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import morgan from 'morgan'

import todoRoutes from './routes';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL,  { useNewUrlParser: true } );

app.use("/api/v1", todoRoutes);

app.listen(8000, () => console.log("Running on localhost:  8000".silly));
