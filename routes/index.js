const express = require('express');
const router = express.Router();

const homeController = require('../conrollers/home_controller');


router.get('/' , homeController.home);
router.use('/project',require('./project'));
router.use('/bug', require('./bug'));




module.exports= router;