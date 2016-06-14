//include variables and exists libraries
var mongoose = require('mongoose');// DB connections
var Schema = mongoose.Schema;//to create schemas


//Mongoose DB connection
var connection = mongoose.createConnection('mongodb://danny:danivolp89@ds049624.mlab.com:49624/ein_prat',function (error) {
    console.log("Trying to connect to the Mlab DB....\n");
    if(error){
        console.log("Warning! Error occurred!\n\n");
        console.log(error.name, "<- Is the error name\n", error.message , "<- Is the error message");
    }
    else{
        console.log("App is now connected to Mlab DB");
    }
});

// -- Create Senior schema --
var seniors = new Schema({
    firstName: String,
    lastName: String,
    identity: String,
    sis: String,
    Email: String,
    session : String,
    birthday: String,
    gender: String,
    status: String,
    //address: "",
    homeAdd: String,
    homeNum: String,
    homeTown: String,
    zipCode: String,
    army_type: String,
    army_unit: String,
    keva_ktsuna: String,
    recrue_date: String,
    release_date: String,
    army_more: String,
    trip_continent: String,
    trip_country: String,
    trip_year: String,
    trip_recommendation: String,
    courses: String,
    courses_more: String,
    knowledge_type: String,
    knowledge: String,
    knowledge_diff: String,
    trip_else: String,
    knowledge_else: String
});

var jobs = new Schema({
    desc: String,
    timeuploaded: String
});


// -- Connect collections to schema --
var Senior = connection.model('SeniorStudent',seniors);

var Job = connection.model('JobInfo', jobs);



module.exports = Senior;   //if i want to use Senior in other files, i need to do before 'require'
// exports.Jobs = Job;
// exports.Senior = Senior;
//
// module.exports = connection;


