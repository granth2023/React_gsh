import express from 'express';
import  { getProject, accessProtectedFile } from './controllers.js';



const router = express.Router();


router.get('/projects/:projectId', getProject);
router.post('/api/protected-files', accessProtectedFile);
// router.get('/file/:filename');

export default router; 