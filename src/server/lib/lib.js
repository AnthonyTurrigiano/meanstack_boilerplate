module.exports = function(app){
    //morgan logger 
    require("./modules/morgan")(app);
    //compression
    require("./modules/compression")(app);
    //cors
    require("./modules/cors")(app);
};