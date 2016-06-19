//var HttpStatus = require('http-status-codes');
//var mongoUtils = require('../utils/connectDB');
// all the routes
// POST = taking information from the client

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userLogin;


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


// --login--
router.post('/log', function (req, res) {
    //var loginData = req.body;
    var loginTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');// get login time

    var pickedOne = Senior.findOne({'identity': req.body.identity, 'sis': req.body.sis}, function (err, userObj) {
        if (err) {
            console.log(err);
        }
        else if (userObj) {
            userLogin = userObj;
            console.log('Found:', userObj);   /// need to return the userObj to put the data into the seniorInfo
            res.status(200).end("User Found", req.body.firstName, "@ Seniors DB");
        }
        else {
            console.log('User not found!');
            res.status(500).end("Error, user not in DB");
        }
    });
});



// --Add information of the Senior to the DB--
router.post('/change_info', function(req,res){

    // get the _objId form the user
    var updateID = req.body.identity; // get the user data
    var updateInfo = req.body;
    console.log('ID:', updateID); // print for debug

    Senior.findOneAndUpdate({identity:updateID}, {$set:{
                            birthday: updateInfo.birthday,
                            gender: updateInfo.gender,
                            status: updateInfo.status,
                            homeAdd: updateInfo.homeAdd,
                            homeNum: updateInfo.homeNum,
                            homeTown: updateInfo.homeTown,
                            zipCode: updateInfo.zipCode,
                            army_type: updateInfo.army_type,
                            army_unit: updateInfo.army_unit,
                            keva_ktzuna: updateInfo.keva_ktzuna,
                            recrue_date: updateInfo.recrue_date,
                            release_date: updateInfo.release_date,
                            army_more: updateInfo.army_more,
                            trip_continent: updateInfo.trip_continent,
                            trip_country: updateInfo.trip_country,
                            trip_year: updateInfo.trip_year,
                            trip_recommendation: updateInfo.trip_recommendation,
                            courses: updateInfo.courses,
                            courses_more: updateInfo.courses_more,
                            knowledge_type: updateInfo.knowledge_type,
                            knowledge: updateInfo.knowledge,
                            knowledge_diff: updateInfo.knowledge_diff
                        }}, function(err,upObj){
                            if (err) {
                                console.log('Not succeed the update Data!');
                                res.status(500).end("Error, user not in DB");
                                }
                                console.log('the data is updated: ',upObj);
                                res.status(200).end("OK, changed info");

                            }
    );

});


// -- Find Senior --
router.post('/senior_search', function(req,res){
    var searchSenior = req.body;
    console.log('The dataSenior to search: ', searchSenior);  // for debug
    
    Senior.find( { 'firstName': req.body.firstName , 'lastName': req.body.lastName, 'homeTown': req.body.homeTown,
                    'army_type': req.body.army_type, 'trip_continent': req.body.trip_continent, 'knowledge_type': req.body.knowledge_type,
                     'knowledge': req.body.knowledge
                 }, function(err, resultSeniors){
                        if (err) {
                            console.log('Not found Senior :(');
                            res.status(500).end("Error, user not found");
                        } else {
                            console.log('Result of the search: ', resultSeniors);
                            res.status(200).end("Result User");
                            //res.status(200).end(JSON.stringify(userMap,null,"\t"));
                          }

                     }
    );
});


module.exports = router;



/*



*/




/*
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


});*/



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




