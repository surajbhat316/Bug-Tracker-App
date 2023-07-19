const Project = require('../models/projects');

module.exports.createProject = async function(req,res){

    try{
        let project = await Project.create({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        });

        if(project){
            return res.redirect('/');
        }
        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }

}

module.exports.getProjectDetails = async function(req, res){
    try{
        let project = await Project.findOne({_id : req.params.id});
        console.log(project);
        return res.render('project_info', {
            project: project
        })
    }   
    catch(err){
        return res.redirect('back');
    }
    
}