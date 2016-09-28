//configuration settings
var config = require("./config/config");

//Require gulp module
var gulp = require("gulp");

//Require gulp load plugins module
var plugins = require("gulp-load-plugins")({
    rename : {"postcss-font-magician" : "fontMagician"},
    pattern : ["*"]
});


//tasks
gulp.task("src:styles", require("./gulptasks/src/styles")(gulp, plugins, config));