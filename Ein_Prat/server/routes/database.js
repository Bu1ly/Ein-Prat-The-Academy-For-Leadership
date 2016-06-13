//var HttpStatus = require('http-status-codes');
//var mongoUtils = require('../utils/connectDB');
// all the routes
// POST = taking information from the client

var express = require('express');
var router = express.Router();


var Senior = require('./../utils/schemas_and_connectDB');// to insert into senior db
var InfoSenior = require('./../utils/schemas_and_connectDB');// to insert into InfoSenior db


//************ DataBase Functions ******************

// --Register new Users--
router.post('/reg', function(req,res){
    regTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');//get register time
    var registerData = req.body; // get the user data
    console.log(registerData); //print for debug

    var seniorJason = {                     // create senior object and take the data according to Senior Schema
         firstName : registerData.firstName,
         lastName : registerData.lastName,
         identity : registerData.identity,
         sis: registerData.sis,
         Email: registerData.Email,
         session : regTime
    };
    // create new DB instance
    var newSenior = new Senior(seniorJason);

    // save the newSenior to the DB
     newSenior.save(function(err){
         if(err)
             res.status(500).end("Error");
         else{
             res.status(200).end("Added", seniorJason, "to Seniors DB");
         }
     })
});


// --Add information of the Senior to the DB--
router.post('/change_info', function(req,res){
    regTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');//get register time
    var updateData = req.body; // get the user data
    console.log(updateData); //print for debug

    var updateJason = {                     // create senior object and take the data according to Senior Schema
        birthday:  updateData.birthday,
        gender:  updateData.gender,
        status: updateData.status,
        homeAdd:  updateData.homeAdd,
        homeNum:  updateData.homeNum,
        homeTown:  updateData.homeTown,
        zipCode:  updateData.zipCode,
        army_type:  updateData.army_type,
        army_unit:  updateData.army_unit,
        keva_ktsuna:  updateData.keva_ktsuna,
        recrue_date:  updateData.recrue_date,
        release_date:  updateData.release_date,
        army_more:  updateData.army_more,
        trip_continent:  updateData.trip_continent,
        trip_country:  updateData.trip_country,
        trip_year:  updateData.trip_year,
        trip_recommendation:  updateData.trip_recommendation,
        courses:  updateData.courses,
        courses_more:  updateData.courses_more,
        knowledge_type:  updateData.knowledge_type,
        knowledge: updateData.knowledge,
        knowledge_diff:  updateData.knowledge_diff,
        trip_else: updateData.trip_else,
        knowledge_else:  updateData.knowledge_else,
        session : regTime
    };
    // create new DB instance
    var upSenior = new InfoSenior(updateJason);

    // save the newSenior to the DB
    upSenior.save(function(err){
        if(err)
            res.status(500).end("Error");
        else{
            console.log("jhsdhjsdjhsd");
            res.status(200).end("Update", updateJason, "to Seniors DB");
        }
    })
});



// --login: find--
router.post('/log', function (req, res) {
    var loginData = req.body; // ?!?!@?!@??@?!?@?!?@ how to get data

   //  console.log("req.body:  "+loginData); //print for debug
    var seniorJason = {                     // create senior object and take the data according to Senior Schema
        identity : loginData.identity,
        sis: loginData.sis
    };

    var newSenior = new Senior(seniorJason);
    // var loginIdentity = req.body.identity;
    // var loginSisentity = req.body.sis;

   // var loginTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');// get login time
   // console.log("test4: id= " + newSenior)

    var pickedOne = Senior.findOne({'identity': req.body.identity, 'sis': req.body.sis}, function (err, userObj) {
        if (err){
            console.log(err);
        }
        else if (userObj) {
            console.log('Found:', userObj);
            res.status(200).end("User Found", req.body.firstName, "@ Seniors DB");
        }
        else {
            console.log('User not found!');
            res.status(500).end("Error, user not in DB");
        }
    });

    // if(loginTime - pickedOne.session)
    //     res.render('index');

});


// --register: find and check id--
router.get('/user/:identity', function (req, res) {
var identity = req.params.identity;
    console.log("identity:  "+identity);
     Senior.findOne({'identity': identity}, function (err, userObj) {
        if (err){
            console.log(err);
        }
        else if (userObj) {
            console.log('Found:', userObj);
            res.status(200).end("User Found", req.body, "@ Seniors DB");
            
        }
        else {
            console.log('User not found!');
            res.status(500).end(" user not in DB");
        }
    });

    // if(loginTime - pickedOne.session)
    //     res.render('index');

});




//EXAMPLE FOR ASSAF//
Senior.find({}, function (err, users) {
    var userMap = {}; //return object

    //fill up the object
    users.forEach(function(user) {
        userMap[user._id] = user;
    });
    //    return the users object
    console.log(JSON.stringify(userMap));
});


// --Delete User--
router.post('/delete', function (req,res) {
    var registerData = req.body; // get the user data
    console.log(registerData); //print for debug

    // create senior object and take the data according to Senior Schema
    var seniorJason = {
        name : registerData.name,
        lastName : registerData.lastName,
        identity : registerData.identity,
        session : registerData.session
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


// --Delete a specific Senior--
router.delete('delete:id', function (req,res) {
    Senior.findOneAndRemove({'_id': req.param.id}, function (err, updated) {
        if (err)
            console.log("The user not found\n");
        else
            res.json(updated);
    });
});



// Update Senior


module.exports = router;
