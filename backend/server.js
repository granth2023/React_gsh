import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import fs from 'fs';
// import AWS from 'aws-sdk';
import routes from './routes.js'; // Adjust the path to match your file structure
import Project from './models.js'; // Ensure this path is correct
import AWS from './config/awsConfig.js';
import connectDB from './config/dbConfig.js';
import upload from './middleware.js'

const app = express();
app.use(morgan('dev'));
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use('/api', routes); // Use API routes

// General error handler
app.use((err, req, res, next) => {
  console.error("Error during request to", req.url, "Error:", err.stack);
  res.status(err.status || 500).json({ message: err.message, error: {} });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


