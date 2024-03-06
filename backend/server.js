import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import ConnectDB from './config/db.js'

import productsRoutes from "./routes/productsRoutes.js"

import { errorHandler, notFound } from './middleware/errroMiddleware.js';
const port = process.env.PORT || 5000;

ConnectDB()

const app = express();

app.get('/',(req,res) => {
    res.send('API is running...');
})

app.use('/api/products',productsRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port,() => console.log(`Server running on port ${port}`))