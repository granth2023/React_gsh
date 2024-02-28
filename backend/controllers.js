import Project from './models.js';

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

const getFileStream = (gfs) => (req, res) => {
    gfs.find({ filename: req.params.filename}).toArray((err, files) => {
        if(!files || files.length === 0) {
            return res.status(404).json({ err: 'No file exists'});
        }
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
}
export { getFileStream };