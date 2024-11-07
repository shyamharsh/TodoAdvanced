import express from 'express'
import cors from'cors'
import todoRouter from './routers/todoRouter.js'
import userRouter from './routers/userRouter.js'
//import dotenv from 'dotenv'
//import { pool } from './helper/db.js'
//import pkg from 'pg'


//const environment = process.env.NODE_ENV;

//dotenv.config()

const port = process.env.PORT;
//const { Pool } = pkg;
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/',todoRouter)
app.use('/user',userRouter)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({error: err.message})
})







app.listen(port);

