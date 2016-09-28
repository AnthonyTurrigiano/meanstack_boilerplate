//path module
var path = require("path");

//configuration settings
var config = require(path.resolve("./config/config"));

module.exports.get = function(req,res){
   //serve index file
   res.sendFile(path.resolve(config.src.index));
};