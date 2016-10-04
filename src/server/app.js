//path module
var path = require("path");

//configuration settings
var config = require(path.resolve("./config/config"));

//express.js module
var express = require("express");
var app = express();

//Database Connection
require("./db/connect");

//npm modules
require("./lib/lib")(app);

//static files
app.use("/public", express.static(path.resolve(config.src.paths.public)));
app.use("/views", express.static(path.resolve(config.src.paths.views)));
app.use("/client", express.static(path.resolve(config.src.paths.client)));

//routes
require("./routes/routes")(app);

//export app
module.exports = app;