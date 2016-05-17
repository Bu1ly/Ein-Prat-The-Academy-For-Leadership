var express = require('express'); // get express for server init
var app = express();
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
//'mongodb://localhost:27017/Database'
var connection = mongoose.createConnection('mongodb://danny:danivolp89@ds049624.mlab.com:49624/ein_prat',function (error) {
    console.log("Trying to connect to the Mlab DB....\n");

    if(error){
        console.log("Warning! Error occurred!\n\n");
        throw error;
        //console.log(error.name, "<- Is the error name\n", error.message , "<- Is the error message");
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

// Main route
app.get('/', function (req,res,error) {
    res.sendfile(path.join(__dirname + "/views/index.ejs"));
});


// *********** API CALLS ***********

// --Register new Users--
app.post('/reg', function(req,res){
   var registerData = req.body; // get the user data
    console.log(registerData); //print for debug

   // create senior object and take the data according to Senior Schema
    var seniorJason = {
        name : registerData.name,
        lastName : registerData.lastName,
        identity : registerData.identity
    };

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


// --Delete User--
app.post('/delete', function (req,res) {
    var registerData = req.body; // get the user data
    console.log(registerData); //print for debug

    // create senior object and take the data according to Senior Schema
    var seniorJason = {
        name : registerData.name,
        lastName : registerData.lastName,
        identity : registerData.identity
    };

    // create new DB instance
    var deleteSenior = new Senior(seniorJason);

    // remove the newSenior to the DB
    deleteSenior.remove(function(err){
        if(err)
            res.status(500).end("Error");
        else
            res.status(200).end("Removed", seniorJason, "from Seniors DB");
    })
});


// --Give me a specific Senior--
app.get('reg/:id', function(req,res) {
   Senior.find( {'_id': req.params.id}, function(err, user) {
        if(err)
            console.log("The user not found\n");
        else
            res.json(user[0]);
    });
});


// Get all the Seniors
app.get('/users', function (req,res) {
   Senior.find({}, function(err,users) {
       if(err)
           res.status(500).end("Error");
       else {
           var SeniorMap = {};  //return Senior object
           // fill up the Senior object
           users.forEach(function (user)
           {
                SeniorMap[user._id] = user;
           });

           res.end(JSON.stringify(SeniorMap, null, "\n"));
           //e.g: JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) --> '"2006-01-02T15:04:05.000Z"'
       }
   });
});



//var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
//-->JSON.stringify(foo, ['week', 'month']);
 //-->'{"week":45,"month":7}', only keep "week" and "month" properties


// --Exports--
module.exports =  app;  // to use app in other files,i need to do before 'require', e.g: var Foo = function(){};  app.fooMethod = Foo;
exports.Server = connection; // connection to the local Db, if i want to use DB in other files;









