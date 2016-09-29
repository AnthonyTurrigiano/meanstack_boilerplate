//path module
var path = require("path");

//configuration settings
var config = require(path.resolve("./config/config"));

//mongoose module
var mongoose = require("mongoose");

mongoose.connect(config.src.db.connection, function(err){
    if(err)
        console.log(err);
    
    console.log("*****************************************");
    console.log("Successfully Connected to Database Server");
    console.log("*****************************************");
});

module.exports = mongoose;