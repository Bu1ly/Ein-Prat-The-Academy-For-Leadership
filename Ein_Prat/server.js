var app = require('express'); // get express for server init
var path = require('path');// get the path
var mongoose = require('mongoose');// DB connections
var Schema = mongoose.Schema;//to create schemas

//init for using POST calls
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data

// exports
var exports = module.exports = {};

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

// Connect collection to schema
var Senior = connection.model('Senior',seniors);

// Main route
app.get('/', function (req,res) {
    res.sendfile(path.join(__dirname + "/views/index.ejs"));
});

// --------API CALLS --------
//Register new Users
app.post('reg', function(req,res){
   var jason = req.body; // get the user data
    console.log(jason); //print for debug

   // create senior object
    var seniorJason = {
        name : jason.name,
        lastName : jason.lastName,
        identity : jason.identity
    }

    // create new DB instance
    var newSenior = new Senior(seniorJason);

    // save the newSenior to the DB
    newSenior.save(function(err){
        if(err)
            res.status(500).end("Error");
        else
            res.status(200).end("Added", seniorJason, "to Seniors DB");
    })
});

// Delete User
app.post('/delete', function (req,res) {
    var SeniorJason = req.body; // get the user data
    console.log(SeniorJason); //print for debug

    // create senior object
    var seniorJason = {
        name : jason.name,
        lastName : jason.lastName,
        identity : jason.identity
    }

    // create new DB instance
    var newSenior = new Senior(seniorJason);

    // remove the newSenior to the DB
    newSenior.remove(function(err){
        if(err)
            res.status(500).end("Error");
        else
            res.status(200).end("Removed", seniorJason, "from Seniors DB");
    })
});




//module.exports(server);


