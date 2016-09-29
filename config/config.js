module.exports = {
    gulp : {
        tasks : "./gulptasks"
    },
    sass : "./sass",
    src : {
         host : process.env.IP || '0.0.0.0',
         port : process.env.PORT || 8080,
         domain : process.env.C9_HOSTNAME || "https://localhost",
         session: {
           name : "mean-boilerplate-session",
           secret : "thisisasecret",
         },
         db : {
             connection: "mongodb://0.0.0.0/boilerplate"
         },
         index : "./src/views/html/index.html",
         paths : {
             "public": "./src/public", 
             css : "./src/public/css",
             js : "./src/public/js",
             client : "./src/client",
             img : "./src/public/img",
             fonts : "./src/public/fonts",
             lib : "./src/public/lib"
         }
    },
    dist : {
         host : process.env.IP || '0.0.0.0',
         port : process.env.PORT || 8080,
         domain : process.env.C9_HOSTNAME || "https://localhost",
          session: {
           name : "mean-boilerplate-session",
           secret : "thisisasecret",
         },
         db : {
             connection: "mongodb://0.0.0.0/boilerplate"
         },
         index : "./dist/views/index.html",
         paths : {
             "public": "./dist/public",
             css : "./dist/public/css",
             js : "./dist/public/js",
             client : "./dist/client",
             img : "./dist/public/img",
             fonts: "./dist/public/fonts",
         }
    },
};
