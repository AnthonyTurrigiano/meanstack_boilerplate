//method-override module
var methodOverride = require("method-override");

module.exports = function(app){
    //configure method-override
    app.use(methodOverride());
};