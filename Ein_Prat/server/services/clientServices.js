//var app = require('../app');
var express = require('express');
var router = express.Router();

// *************** CLIENT FUNCTIONS *************

// -- Give me a specific Senior --
router.get('reg/:id', function(req,res) {
    Senior.find( {'_id': req.params.id}, function(err, user) {
        if(err)
            console.log("The user not found\n");
        else
            res.json(user[0]);
    });
});


// -- Get all the Seniors --
router.get('/users', function (req,res) {
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

// -- Login Senior --


// -- Login Admin --

exports.Router = router;