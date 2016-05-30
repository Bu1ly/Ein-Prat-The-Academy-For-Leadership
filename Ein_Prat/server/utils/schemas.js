//include variables and exists libraries
var mongoose = require('mongoose');// DB connections
var Schema = mongoose.Schema;//to create schemas
//var connection = require('./connectDB');

var connection = mongoose.createConnection('mongodb://danny:danivolp89@ds049624.mlab.com:49624/ein_prat',function (error) {
    console.log("Trying to connect to the Mlab DB....\n");

    if(error){
        console.log("Warning! Error occurred!\n\n");
        console.log(error.name, "<- Is the error name\n", error.message , "<- Is the error message");
    }
    else
        console.log("App is now connected to Mlab DB");
});


// -- Create schema --
var senior = new Schema({
    name: String,
    lastName: String,
    identity: String
});

// -- Connect collection to schema --
var Senior = connection.model('Senior',senior);



module.exports = Senior;   //if i want to use Senior in other files;
