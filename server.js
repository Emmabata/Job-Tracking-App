//Express async errors should com first
import 'express-async-errors';
import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

//Routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerAndMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';



const server = http.createServer(app);
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//testing the route with the frontend
app.get('/api/v1/test', (req, res) => {
    res.json({msg: "test route"});
});

//api for jobs, users & authorization(private route)
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);//public route for login/register

//NOT FOUND MIDDLEWARE(it comes after the routes if they don't match the request or does not exit)
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'request not found'});
});

//ERROR MIDDLEWARE(It comes last. the request exists)
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5100;
try{
    await mongoose.connect(process.env.MONGODB_URL);
    server.listen(port, () => {
        console.log(`Server running on PORT ${port}...`);
    });
}catch(error) {
    console.log(error)
    process.exit(1);
}