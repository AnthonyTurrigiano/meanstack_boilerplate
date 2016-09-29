//body-parser module
var bodyParser = require("body-parser");

module.exports = function(app){
    //configure body-parser
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
};