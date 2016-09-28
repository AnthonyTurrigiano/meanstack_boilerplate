//compression module
var compression = require("compression");

module.exports = function(app){
    //configure compression
    app.use(compression({level: 9}));
};