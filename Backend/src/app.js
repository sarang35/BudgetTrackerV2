import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:`${process.env.CORS_ORIGIN}`,
}))
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


//router import 
import {router} from './routes/login.routes.js';

app.use('/api/v2/users', router);

export default app;