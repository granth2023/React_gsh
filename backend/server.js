import express from 'express'
import multer from 'multer';
import Project from './models/Project.js';
import { GridFsStorage } from 'multer-gridfs-storage';

const app = express();

const conn = mongoose.createConnection(process.env.MONGODB_URI);

let gfs; 

conn.once('open', () =>{
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads'
    });
})

const sotrage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const fileInfo ={
                filename: file.originalname,
                bucketName: 'uploads'
            }
            resolve(fileInfo);
        })
    }
})
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file })
});





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listening on port')
});
