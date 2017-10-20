var express = require('express'),
    router		= express.Router();

var controller = require("./views/index");

router.get("/",controller.home);
module.exports = router;