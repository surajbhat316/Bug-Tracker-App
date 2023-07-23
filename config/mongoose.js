const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/bug_tracker_app');
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error',console.error.bind(console, "Error Connecting To Db"));

db.once("open", function() {
    console.log("Connected to database");
});


module.exports = db;