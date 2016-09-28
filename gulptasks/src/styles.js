module.exports = function(gulp, plugins, config){
    //postcss processors
    var processors = [
           plugins.autoprefixer,
           plugins.fontMagician
    ];
    
    return function(){
        return gulp
                    .src(config.sass + "/**/*.scss")
                    .pipe(plugins.sass().on('error', plugins.sass.logError))
                    .pipe(plugins.postcss(processors))
                    .pipe(gulp.dest(config.src.paths.css));
    };
};