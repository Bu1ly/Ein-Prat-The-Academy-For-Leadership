//var HttpStatus = require('http-status-codes');
//var mongoUtils = require('../utils/connectDB');

var express = require('express');
var router = express.Router();
//var Date = require('time');

//var app = require('../app');
var Senior = require('./../utils/schemas');//to insert into senior db


//************ DataBase Functions ******************

// --Register new Users--
router.post('/reg', function(req,res){
    var registerData = req.body; // get the user data
    console.log(registerData); //print for debug
    // create senior object and take the data according to Senior Schema
    var seniorJason = {
         name : registerData.id,
         lastName : registerData.password
         // identity : registerData.identity
         //session : Date.now();
         //id: registerData.id,
         //password: registerData.password
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


//EXAMPLE FOR ASSAF//
Senior.find({}, function (err, users) {
    var userMap = {}; //return object

    //fill up the object
    users.forEach(function(user) {
        userMap[user._id] = user;
    });
    //    return the users object
    console.log(JSON.stringify(userMap));
})


// --Delete User--
router.post('/delete', function (req,res) {
    var registerData = req.body; // get the user data
    console.log(registerData); //print for debug

    // create senior object and take the data according to Senior Schema
    var seniorJason = {
        name : registerData.name,
        lastName : registerData.lastName,
        identity : registerData.identity
        //session : Date.now();
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
    Senior.findOneAndRemove({'_id': req.param.id}, function (err, updated) {//add this line after require senior
        if (err)
            console.log("The user not found\n");
        else
            res.json(updated);
    });
});



// Update Senior


module.exports = router;
