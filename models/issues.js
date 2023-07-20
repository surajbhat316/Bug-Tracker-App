const mongoose = require('mongoose');

const issuesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    labels: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }

},{
    timestamps: true
});

const Issue = mongoose.model('Issue', issuesSchema);
module.exports = Issue;