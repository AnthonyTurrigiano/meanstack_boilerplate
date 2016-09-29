module.exports = function(app){
  //Index Route
  app.all("/*", require("./index/index.route"));
  app.use("/", require("./index/index.route"));  
};