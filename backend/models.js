import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    filename: 'String',
    filepath: 'String',
    filetype: 'string',
});

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    files: [fileSchema],
});

const Project = mongoose.model('Project', projectSchema)

export default Project;