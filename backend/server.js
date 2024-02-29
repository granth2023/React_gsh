import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import fs from 'fs';
import AWS from 'aws-sdk';
import routes from './routes.js'; // Adjust the path to match your file structure

// Initialize dotenv to use environment variables
dotenv.config();
console.log(process.env.AWS_S3_BUCKET_NAME)
// Initialize Express
const app = express();

// Morgan middleware for logging HTTP requests
app.use(morgan('dev'));

// MongoDB connection (if you're still using MongoDB for other parts of your app)
const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

// AWS S3 configuration
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
const s3 = new AWS.S3();

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' }); // Temporarily store files locally

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    console.error('no file uplaoded');
    return res.status(400).send('No file uploaded.');
  }

  const file = req.file;
  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME, // Your bucket name
    Key: file.originalname, // File name you want to save as in S3
    Body: fs.createReadStream(file.path)
  };

  s3.upload(uploadParams, (err, data) => {
    // Delete the file from local storage whether or not the upload was successful
    fs.unlink(file.path, unlinkErr => {
      if (unlinkErr) console.error("Error deleting file:", unlinkErr);
    });

    if (err) {
        console.error("aws s3 upload failed:", err);
      return res.status(500).send("Error uploading file.");
    }
    console.log(data);
    res.send({ message: "File uploaded successfully.", data });
  });
});

// Use the routes
app.use('/api', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error to the server console
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
