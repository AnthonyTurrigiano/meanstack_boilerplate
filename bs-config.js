//configuration
var config = require("./config/config");

module.exports = {
    
    port : 8081,
    proxy : config.src.host + ':' + config.src.port,
    ui: {
        port: 8082
    }
    
    

};