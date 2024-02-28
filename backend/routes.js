import express from 'express';
import  { getProject } from './controllers/project';

const router = express.Router();


router.get('/projects/:projectId', getProject);

export default router; 