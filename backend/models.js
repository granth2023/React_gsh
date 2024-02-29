import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    filename: 'String',
    filepath: 'String',
    filetype: 'string',
    url: 'string'
});

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    files: [fileSchema],
    accessPassword: {type: String, required: true}
});

const Project = mongoose.model('Project', projectSchema)

export default Project;