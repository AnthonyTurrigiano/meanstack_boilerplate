//Morgan module
var morgan = require("morgan");

module.exports = function(app){
    //configure morgan 
    app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));
};