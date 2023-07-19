const express = require('express');
const router = express.Router();

const homeController = require('../conrollers/home_controller');


router.get('/' , homeController.home);


module.exports= router;