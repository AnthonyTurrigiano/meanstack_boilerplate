module.exports = function(gulp, config){
    return function(){
        return gulp
                    .src(config.src.paths.icons.fontAwesome.fonts + "/**/*.*")
                    .pipe(gulp.dest(config.src.paths.fonts));
                    
    };
};