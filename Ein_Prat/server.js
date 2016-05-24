var express = require('express');
var app =  require('./server/app');
var path = require('path');// get the path
var mongoose = require('mongoose');// DB connections
var Schema = mongoose.Schema;//to create schemas
// In order to do 'require' to no local modulejs, we need write e.g: ('./routes/index)

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


// --Connect to DB--
// 'mongodb://localhost:27017/Database'
var connection = mongoose.createConnection('mongodb://danny:danivolp89@ds049624.mlab.com:49624/ein_prat',function (error) {
    console.log("Trying to connect to the Mlab DB....\n");

    if(error){
        console.log("Warning! Error occurred!\n\n");
        console.log(error.name, "<- Is the error name\n", error.message , "<- Is the error message");
    }
    else
        console.log("App is now connected to Mlab DB");
});

// --Create schema--
var seniors = new Schema({
    name: String,
    lastName: String,
    identity: String
});

// --Connect collection to schema--
var Senior = connection.model('Senior',seniors);
console.log(Senior.find({}, 'Moshe'));

// Main route
app.get('/', function (req,res) {
    res.sendfile(path.join(__dirname + "/views/index.ejs"));
});



//var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
//-->JSON.stringify(foo, ['week', 'month']);
 //-->'{"week":45,"month":7}', only keep "week" and "month" properties


// --Exports--
module.exports = server ;  // to use app in other files,i need to do before 'require', e.g: var Foo = function(){};  app.fooMethod = Foo;
exports.connection = connection; // connection to the local Db, if i want to use DB in other files;
exports.Senior = Senior;







