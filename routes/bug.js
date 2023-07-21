const express = require('express');
const router = express.Router();

const bugsController = require('../conrollers/bugs_controller');
const Project = require('../models/projects');



router.get('/:id',bugsController.getBugs);

router.post('/:id/create', bugsController.createBug);
router.post('/:id/searchByAuthor',bugsController.getByAuthorName);
router.post('/:id/searchByTitle',bugsController.getByTitle);

router.post('/:id/searchByDescription',bugsController.getByDescription);
router.post('/:id/searchByLabels',bugsController.getByLabels);



module.exports = router;