const express = require('express');
const router = express.Router();

const bugsController = require('../conrollers/bugs_controller');
const Project = require('../models/projects');



router.get('/:id',bugsController.getBugs);

router.post('/:id/create', bugsController.createBug);





module.exports = router;