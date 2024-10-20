import express from 'express';
import postRoutes from './routes/posts.js';
import authtRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app =express();

app.use(express.json());
app.use(cors({origin:'http://localhost:5173'}));
app.use(cookieParser());

app.use('/api/auth',authtRoutes);
app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);

app.listen(5000,()=>{
    console.log("Server running on port 5000");
})