//cors module
var cors = require("cors");

module.exports = function(app){
    //configure cors
    app.use(cors());
};