import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import ConnectDB from './config/db.js'

import productsRoutes from "./routes/productsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"


import { errorHandler, notFound } from './middleware/errroMiddleware.js';
const port = process.env.PORT || 5000;

ConnectDB()

const app = express();

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Cookie Parser middleware
app.use(cookieParser())

app.get('/',(req,res) => {
    res.send('API is running...');
})

app.use('/api/products',productsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port,() => console.log(`Server running on port ${port}`))