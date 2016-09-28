//express module
var express = require("express");
var router = express.Router();

//controller module
var controller = require("./index.controller");
router
    .route("/")
    .get(controller.get);

//export router 
module.exports = router;