module.exports = function(plugins){
    return function(cb){
        var started = false;
	
    	return plugins.nodemon({
    		script: 'index.js'
    	}).on('start', function () {
    		// to avoid nodemon being started multiple times
    		// thanks @matthisk
    		if (!started) {
    			cb();
    			started = true; 
    		} 
    	});      
    };
};