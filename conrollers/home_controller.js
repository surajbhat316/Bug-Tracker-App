const Project = require('../models/projects');
module.exports.home = async function(req,res){
    let projects = await Project.find({});
    return res.render('home', {
        projects : projects
    });
}