var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
var path = require("path");
var config = require(path.resolve("./config/config"));
var session = require("express-session");
var mongoose = require("mongoose");
var MongoStore = require('connect-mongo')(session);

module.exports = function(app){
    app.set('trust proxy', 1) // trust first proxy 
    app.use(session({
      name : config.dist.session.name,
      secret: config.dist.session.secret,
      resave: true,
      saveUninitialized: true,
      cookie: { 
          secure: true,
          httpOnly: true,
          domain: config.dist.domain,
          expires: expiryDate
      },
      store: new MongoStore({ 
				      mongooseConnection: mongoose.connection,
				      ttl: 2 * 24 * 60 * 60 
				    })
    }));
};