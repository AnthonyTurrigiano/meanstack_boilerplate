module.exports = function(app){
    //morgan logger 
    require("./modules/morgan")(app);
    //compression
    require("./modules/compression")(app);
    //cors
    require("./modules/cors")(app);
    //bodyparser
    require("./modules/bodyparser")(app);
    //method-override
    require("./modules/methodoverride")(app);
    //express-session
    require("./modules/session")(app);
};