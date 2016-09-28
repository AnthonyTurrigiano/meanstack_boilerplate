module.exports = function(app){
  //Index Route
  app.use("/", require("./index/index.route"));  
};