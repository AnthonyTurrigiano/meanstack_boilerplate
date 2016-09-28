module.exports = {
    gulp : {
        tasks : "./gulptasks"
    },
    sass : "./sass",
    src : {
         host : process.env.IP || '0.0.0.0',
         port : process.env.PORT || 8080,
         index : "./src/views/index.html",
         paths : {
             "public": "./src/public", 
             css : "./src/public/css",
             js : "./src/public/js",
             client : "./src/client",
             img : "./src/public/img",
             fonts : "./src/public/fonts"
         }
    },
    dist : {
         host : process.env.IP || '0.0.0.0',
         port : process.env.PORT || 8080,
         index : "./dist/views/index.html",
         paths : {
             "public": "./dist/public",
             css : "./dist/public/css",
             js : "./dist/public/js",
             client : "./dist/client",
             img : "./dist/public/img",
             fonts: "./dist/public/fonts"
         }
    },
};