var app = require('express'); // get express for server init
var path = require('path');// get the path
var mongoose = require('mongoose');// DB connections
var Schema = mongoose.Schema;//to create schemas

//init for using POST calls
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data


//static routes init

app.use('/javascripts', express.static('public/javascripts'));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use('/font', express.static('public/font'));
app.use('/stylesheets', express.static('public/stylesheets'));
app.use(express.static('views'));


//Connect to DB

var connection = mongoose.createConnection('mongodb://Bu1ly:danivolp89@ds049624.mlab.com:49624/ein_prat',function () {

    console.log("App is now connected to Mlab DB");
});

//Create schema

var seniors = new Schema({
    name: String,
    identity: String,
    lastName: String
});





