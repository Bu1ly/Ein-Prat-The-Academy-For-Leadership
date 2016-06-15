//var HttpStatus = require('http-status-codes');
//var mongoUtils = require('../utils/connectDB');
// all the routes
// POST = taking information from the client

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Senior = require('./../utils/schemas_and_connectDB');// to insert into senior db

// var Senior = db.Senior;
// var Jobs = db.Jobs;

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


// --login
router.post('/log', function (req, res) {
    //var loginData = req.body;
    var loginTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');// get login time

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



// --Add information of the Senior to the DB--
router.post('/change_info', function(req,res){

var updateInfo = req.body;//User data

var updateID = req.body.identity; // get the user ID
console.log(updateID); //print for debug

var updateJason = {                     // create senior object and take the data according to Senior Schema
    identity: updateData.identity,
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

};


Senior.findOneAndUpdate({'identity': updateID},
                     { $setOnInsert: { 'homeAdd' : updateInfo.homeAdd , 'homeTown' : updateInfo.homeTown}},
                     { new: false, upsert: true },function(err) {
                        if (err) {
                            console.log(error.name, "<- Is the error name\n", error.message , "<- Is the error message");
                            res.status(500).end("Error, couldn't update Senior info!");
                        }
                        else
                            res.status(200).end("Updated", updateInfo.firstName, "to Seniors DB");

                    });
});

/*

     // ----------updateInfo--------------
    var ChoiceModel = mongoose.model('choices',Senior);

    router.put('/change_info', function(req,res){
        var id = req.params.identity;
        ChoiceModel.findOne({_id: id}, function(err,foundSenior){
        if(err){
            console.log(err);
            res.status(500).send();
        } else {
            if(!foundSenior){
                res.status(404).send();
            } else {
                if(req.body){
                    foundSenior.homeAdd = req.body.homeAdd;
                }
                if(req.body){
                    foundSenior.army_type = req.body. army_type;
                }

                foundSenior.save(function(err, updateSenior){
                    if(err){
                        console.log(err);
                        res.status(500).send();
                    } else {
                        res.send(updateSenior);
                    }

                });
            }

        }

        });

    });*/







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

    });
});



//
// //EXAMPLE FOR ASSAF//
// Senior.find({}, function (err, users) {
//     var userMap = {}; //return object
//
//     //fill up the object
//     users.forEach(function(user) {
//         userMap[user._id] = user;
//     });
//     //    return the users object
//     console.log(JSON.stringify(userMap));
// });


// --Delete User--
// router.post('/delete', function (req,res) {
//     var registerData = req.body; // get the user data
//     console.log(registerData); //print for debug
//
//     // create senior object and take the data according to Senior Schema
//     var seniorJason = {
//         name : registerData.name,
//         lastName : registerData.lastName,
//         identity : registerData.identity,
//         session : registerData.session
//     };
//
//
//     // create new DB instance
//     var deleteSenior = new Senior(seniorJason);
//
//     // remove the newSenior to the DB
//     deleteSenior.remove(function(err){
//         if(err)
//             res.status(500).end("Error");
//         else
//             res.status(200).end("Removed", seniorJason, "from Seniors DB");
//     })
// });
//
//
// // --Delete a specific Senior--
// router.delete('delete:id', function (req,res) {
//     Senior.findOneAndRemove({'_id': req.param.id}, function (err, updated) {
//         if (err)
//             console.log("The user not found\n");
//         else
//             res.json(updated);
//     })
// });
//


// Update Senior


module.exports = router;