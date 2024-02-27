import Project from './models/Project';

export const getProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await getProject.findById(projectId).exec();
        if(project) {
            res.json(project);
        } else {
            res.status(404).send('Project not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};