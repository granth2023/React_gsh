import express from 'express'
import multer from 'multer';
import Project from './models/Project.js';

const app = express();
const upload = multer({ dest: 'uploads/'});

app.post('/projects/:projectId/files', upload.single('file', async (req, res) => {
    try{
        const { projectId } req.params;
        const { file } = req; 
        const { project } = await Project.findbyId(projectId);
        
        project.files.push({
            filename: file.originalname,
            filepath: file.filepath  
            filetype: file.mimetype, 
        });

        
    }))




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listening on port')
});
