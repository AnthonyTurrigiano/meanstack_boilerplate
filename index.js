//configuration settings
var config = require("./config/config");

//http module
var http = require("http");

//set enviornment
var env = process.env.NODE_ENV = "development";

if(env === "development"){
    //app
    var app = require("./src/server/app");
    
    //createServer
    http.createServer(app).listen(config.dist.port, config.dist.host, function(){
       console.log("Server Listening at %s:%s", config.dist.host, config.dist.port); 
    });    
    } else if(env === "production") {
    //app
    var app = require("./dist/server/app");
    
    //createServer
    http.createServer(app).listen(config.src.port, config.src.host, function(){
       console.log("Server Listening at %s:%s", config.src.host, config.src.port); 
    });
}
