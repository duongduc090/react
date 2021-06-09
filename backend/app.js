import express, { Router } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import expressValidator from 'express-validator';

import ProductRouter from './routes/Product';
import CategoryRouter from './routes/Category';
import AuthRouter from './routes/auth'
import UserRouter from './routes/user'

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log(`Connected`);
})
mongoose.connection.on('Error', err => {
    console.log(`Data connect failed, ${err.message}`);
})
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors({ credentials: 'same-origin' }));

app.use('/api', ProductRouter);
app.use('/api', CategoryRouter);
app.use('/api', AuthRouter);
app.use('/api', UserRouter);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})