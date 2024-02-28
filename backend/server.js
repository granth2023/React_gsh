import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import routes from './routes/routes.js'; // Adjust the path based on your structure
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const conn = mongoose.createConnection(process.env.MONGODB_URI);

let gfs;
conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads',
    });
});

// Storage setup remains the same
const storage = new GridFsStorage({ /* configuration */ });
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// Use the routes
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
