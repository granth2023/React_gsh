import express from 'express';
import  { getProject } from './controllers.js';



const router = express.Router();


router.get('/projects/:projectId', getProject);
// router.get('/file/:filename');

export default router; 