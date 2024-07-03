import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from ''

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/test',(req,res)=>{
    res.json({message:'ApI is working'})
});