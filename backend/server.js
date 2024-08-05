import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';


const PORT = 3000;

dotenv.config();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



app.get("/",(req,res)=> {
    res.send("Hello world chat app");
})

server.listen(PORT,()=> {
    console.log(`app is listening to port ${PORT}`);
})


