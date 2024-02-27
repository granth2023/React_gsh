import express from 'express'
import multer from 'multer';
import Project from './models/Project.js';

const app = express();





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listening on port')
});
