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

export const accessProtectedFile = async (req, res) => {
    const { password, fileId } = req.body;

    try {
        const project = await Project.findOne({ "files._id": fileId}, { "files.$" : 1})

        if(!project) {
            return res.status(404).send('Project not found');
        }

        if(project.accessPassword && password === project.accessPassword) {
            const file = project.files[0];
            res.send({ url: file.url});
        } else {
            res.status(401).send('unanothrized or incorrect password')
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('server error')
    }
}

const getFileStream = (gfs) => (req, res) => {
    gfs.find({ filename: req.params.filename}).toArray((err, files) => {
        if(!files || files.length === 0) {
            return res.status(404).json({ err: 'No file exists'});
        }
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
}
export { getFileStream };