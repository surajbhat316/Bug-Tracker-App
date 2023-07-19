const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }

},{
    timestamps: true
});


const Project = mongoose.model('Project', projectsSchema);
module.exports = Project;