//path module
var path = require("path");

//browser-sync options
var bsOptions = require(path.resolve("./bs-config"));

module.exports = function(plugins){
    return function(){
        plugins.browserSync.create();
        plugins.browserSync.init(bsOptions);
    };
};