//include variables and exists libraries
var mongoose = require('mongoose');// DB connections
var Schema = mongoose.Schema;//to create schemas
var connection = require('./connectDB');



// -- Create schema --
var senior = new Schema({
    name: String,
    lastName: String,
    identity: String
});

// -- Connect collection to schema --
var Senior = connection.model('SeniorStudent',senior);



module.exports = Senior;   //if i want to use Senior in other files;
