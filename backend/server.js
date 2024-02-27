import express from 'express'
import multer from 'multer';
import Project from './models/Project.js';

const app = express();
const upload = multer({ dest: 'uploads/'});

app.post('/projects/:projectId/files', upload.single('file', async (req, res) => {
    try{
        const 
    }))




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listening on port')
});
