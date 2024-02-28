import express from 'express';
import  { getProject, serveFile } from './controllers.js';



const router = express.Router();


router.get('/projects/:projectId', getProject);
router.get('/file/:filename', serveFile);

export default router; 