const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('./assets'));


app.use(express.urlencoded());
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

const db = require('./config/mongoose');

app.use('/',require('./routes/index'));


app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(PORT, function(err){
    if(err){
        console.log("error in creatiing server ",err);
        return;
    }
    console.log("server listening on port ",PORT);
})