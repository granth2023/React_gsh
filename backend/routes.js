import express from 'express';
import AWS from './config/awsConfig.js';
import upload from './middleware.js'; // Ensure this path correctly points to your upload middleware
import fs from 'fs';
import Project from './models.js'; // Ensure this path is correct

const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
    console.log('upload route hit')
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    console.log('file recevied:', req.file)
    
    const file = req.file;
    const s3 = new AWS.S3();
    const uploadParams = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: file.originalname,
        Body: fs.createReadStream(file.path)
    };
    
    try {
        const data = await s3.upload(uploadParams).promise();
        console.log('upload', data)
        
        // No need to delete the file from local storage here

        const projectId = req.body.projectId;
        const project = await Project.findById(projectId);
        if (!project) {
          return res.status(404).send("Project not found");
        }
    
        const newFile = {
          filename: file.originalname,
          filepath: uploadParams.Key,
          filetype: file.mimetype,
          url: data.Location
        };
    
        project.files.push(newFile);
        await project.save();
    
        res.send({ message: "Uploaded file successfully", data: newFile });
    } catch (err) {
        console.error("Error uploading file:", err);
        res.status(500).send("Error uploading file.");
    }
});

export default router;
