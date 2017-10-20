var express 		= require('express'),
	app	    		= express(),
	bodyparser 		= require('body-parser'),
	bcrypt			= require('bcrypt-nodejs'),
	session			= require('express-session'),
	mongoose		= require('mongoose'),
	request			= require('request'),
	methodOverride  = require('method-override'),
	multer 			= require('multer')
    place 			= require('./models/user'),
    upload      	= multer({ dest: 'public/files' }),
	routes 			= require('./routes/route');
//Middlewares
app.use("/",routes);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended :true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
require('dotenv').config();


app.listen(process.env.port,function(err,res){
if(err)
	console.log(err);
else
	console.log("APP On port " + process.env.port);

})