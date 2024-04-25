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
import jobRouter from './routes/jobRoutes.js'

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerAndMiddleware.js';
import { validateTest } from './middleware/validationMiddleware.js';






const server = http.createServer(app);
app.use(express.json());




if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



// app.get("/", (req, res) => {
//     res.send("hello world");
// });
//api for all jobs


//input express validation between the url and the callback function in a square bracket
app.post(
    '/api/v1/test', 
    
    validateTest,
    (req, res) => {
    const {name} = req.body;
    res.json({ message: `hello ${name}`});
});

app.use('/api/v1/jobs', jobRouter);
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


