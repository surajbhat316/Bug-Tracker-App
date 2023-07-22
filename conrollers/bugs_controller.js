const Issue = require('../models/issues');
const Project = require('../models/projects');
module.exports.createBug = async function(req,res){
    try {
        let labels = req.body.label!=null?req.body.label:req.body.newLabel;
        let bug = await Issue.create({
            title: req.body.title,
            description: req.body.description,
            labels: labels,
            author: req.body.author,
            project: req.params.id
        });
        // Update the labels of the associated Projects Labels
        let project = await Project.findById(req.params.id);
        if(!project.labels.includes(labels)){
            project.labels.push(labels);
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


module.exports.getByAuthorName = async function(req, res) {
    try{
        let project  = await Project.findOne({_id: req.params.id});
        if(!project){
            return res.status(404).json({
                message: "Project not found"
            });
        }
        let bugs = await Issue.find({
            project: req.params.id ,
            author: req.body.author_name
        });
        if(req.xhr){
            if(bugs.length>0){
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: bugs
                    }
                });
            }else{
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: []
                    }
                });
            }
        }
        if(bugs.length>0){
            return res.render('project_info',{
                project: project,
                bugs: bugs
            });
        }else{
            return res.render('project_info',{
                project: project,
                bugs: []
            });
        }
    }
    catch(err){
        console.log("Error: " + err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


module.exports.getByTitle = async function(req,res){
    try{
        let project  = await Project.findOne({_id: req.params.id});
        if(!project){
            return res.status(404).json({
                message: "Project not found"
            });
        }
        let bugs = await Issue.find({
            project: req.params.id ,
            title: {
                $regex: req.body.title
            }
        });

        if(req.xhr){
            if(bugs.length>0){
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: bugs
                    }
                });
            }else{
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: []
                    }
                });
            }
        }
        if(bugs.length>0){
            return res.render('project_info',{
                project: project,
                bugs: bugs
            });
        }else{
            return res.render('project_info',{
                project: project,
                bugs: []
            });
        }
    }
    catch(err){
        console.log("Error: " + err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.getByDescription = async function(req,res){
    try{
        console.log(req.body);
        let project  = await Project.findOne({_id: req.params.id});
        if(!project){
            return res.status(404).json({
                message: "Project not found"
            });
        }
        let bugs = await Issue.find({
            project: req.params.id ,
            description: {
                $regex: req.body.description
            }
        });

        if(req.xhr){
            if(bugs.length>0){
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: bugs
                    }
                });
            }else{
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: []
                    }
                });
            }
        }

        if(bugs.length>0){
            return res.render('project_info',{
                project: project,
                bugs: bugs
            });
        }else{
            return res.render('project_info',{
                project: project,
                bugs: []
            });
        }
    }
    catch(err){
        console.log("Error: " + err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.getByLabels = async function(req,res){
    try{
        console.log(req.body);
        let labels = req.body.labels
        let project  = await Project.findOne({_id: req.params.id});
        if(!project){
            return res.status(404).json({
                message: "Project not found"
            });
        }
        let bugs = await Issue.find({
            project: req.params.id ,    
            labels: {
                $in : labels
            }
        });

        if(req.xhr){
            if(bugs.length>0){
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: bugs
                    }
                });
            }else{
                return res.status(200).json({
                    data: {
                        project: project,
                        bugs: []
                    }
                });
            }
        }

        if(bugs.length>0){
            return res.render('project_info',{
                project: project,
                bugs: bugs
            });
        }else{
            return res.render('project_info',{
                project: project,
                bugs: []
            });
        }
    }
    catch(err){
        console.log("Error: " + err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}