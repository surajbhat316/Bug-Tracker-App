const Issue = require('../models/issues');
const Project = require('../models/projects');
module.exports.createBug = async function(req,res){
    try {
        let bug = await Issue.create({
            title: req.body.title,
            description: req.body.description,
            labels: req.body.label,
            author: req.body.author,
            project: req.params.id
        });
        // Update the labels of the associated Projects Labels
        let project = await Project.findById(req.params.id);
        if(!project.labels.includes(req.body.label)){
            project.labels.push(req.body.label);
        }
        project.save();
        return res.redirect('/project/'+req.params.id);
    } catch (error) {
        console.log("Error Creating an issue: " + error);
        return res.redirect('back');
    }
}



module.exports.getBugs = async function(req, res) {
    try{
        let project = await Project.findOne({_id: req.params.id});
        if(project){
            return res.render('bug', {
                project: project
            });
        }
        return res.status(400).json({
            message: "not authorised"
        });
    }
    catch(err){
        return res.status(400).json({
            message: "Not authorised to view this"
        })
    }
}