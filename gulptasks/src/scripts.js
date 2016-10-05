module.exports = function(gulp, plugins, config){
    return function(){
        return gulp
                        .src([
                            config.src.paths.lib + "/**/jquery.min.js",
                            config.src.paths.lib + "/**/angular*.min.js",
                            config.src.paths.client + "/**/*module.js",
                            config.src.paths.client + "/**/*config*.js",
                            config.src.paths.client + "/**/*controller.js",
                            config.src.paths.client + "/**/*service*.js",
                            !config.src.paths.client + "/app.js",
                            config.src.paths.js + "/**/*.js",
                            ]
                        )
                        .pipe(plugins.cache())
                        //.pipe(plugins.jshint())
                        //.pipe(plugins.jshint.reporter('jshint-stylish'))
                        .pipe(plugins.sourcemaps.init())
                        .pipe(plugins.concat("app.js"))
                        .pipe(plugins.ngAnnotate())
                        .pipe(plugins.sourcemaps.write())
                        .pipe(gulp.dest(config.src.paths.client));
    };
};
