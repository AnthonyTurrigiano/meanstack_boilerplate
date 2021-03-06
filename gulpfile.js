//configuration settings
var config = require("./config/config");

//Require gulp module
var gulp = require("gulp");

//Require gulp load plugins module
var plugins = require("gulp-load-plugins")({
    rename : {
            "postcss-font-magician" : "fontMagician",
            "gulp-cached" : "cache"
            },
    pattern : ["*"]
});


//tasks
gulp.task("src:styles", ["src:faFonts"], require("./gulptasks/src/styles")(gulp, plugins, config));
gulp.task("src:scripts", require("./gulptasks/src/scripts")(gulp, plugins, config));
gulp.task("src:faFonts", require("./gulptasks/src/fonts")(gulp,config));
gulp.task("browserSync", ["nodemon"], require("./gulptasks/src/browsersync")(plugins));
gulp.task("nodemon", require("./gulptasks/src/nodemon")(plugins));
gulp.task("watch", ['browserSync'], function(){
    gulp.watch([config.sass + "/**/*.scss"], ["src:styles"]);
    gulp.watch(["./src/**/*.js"], ["src:scripts"]);
    gulp.watch("./src/views/*.html").on("change", plugins.browserSync.reload);
});