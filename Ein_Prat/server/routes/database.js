//var HttpStatus = require('http-status-codes');
//var mongoUtils = require('../utils/connectDB');

var express = require('express');
var router = express.Router();


var Senior = require('./../utils/schemas');//to insert into senior db


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

// --login: find--
router.get('/log', function (req, res) {

    // var loginIdentity = req.body.identity;
    // var loginSisentity = req.body.sis;
    
   // var loginTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');// get login time


    var pickedOne = Senior.find({'identity': req.body.identity, 'sis': req.body.sis}, function (err) {
        if (err){
            console.log("The user not found\n");
            res.status(500).end("Error, user not in DB");
        }
        else {

            res.status(200).end("User Found", req.body.firstName, "@ Seniors DB");
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
