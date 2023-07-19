const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    return res.render('project');
});

router.post('/create', function(req,res){
    console.log(req.body);
    return res.redirect('back');
})


module.exports = router;