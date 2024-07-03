import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express(); // Create an instance of the Express application

app.use(express.json()); // Middleware to parse JSON bodies

mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user', userRoutes); // Use the user routes
app.use('/api/auth', authRoutes); // Use the auth routes

const PORT = process.env.PORT || 3000; // Define the port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
