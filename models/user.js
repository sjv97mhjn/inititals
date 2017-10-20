var mongoose = require('mongoose');
var userschema = mongoose.Schema({
	username : String,
	password : String,
})

var user = mongoose.model('User',userschema);
module.exports = user;