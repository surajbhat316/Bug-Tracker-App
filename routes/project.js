const express = require('express');
const router = express.Router();

const projectController = require('../conrollers/project_controller');

router.get('/', function(req,res){
    return res.render('project');
});

router.get('/:id', projectController.getProjectDetails);
router.post('/create', projectController.createProject);


module.exports = router;