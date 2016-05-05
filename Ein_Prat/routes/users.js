var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Section here..');
});

//OBJECT FACTORY
var users =  module.exports = function() {
  return {
    id: "",
    firstName: "",
    lastName: ""
  }
};

//EXAMPLE
var user1 = users();
var user2 = users();

user1.name = "Danny";
user1.id = "306319138"
user2.id = "00000000";


console.log("User1 name is: " + user1.name + " and id is: " + user1.id + " user2 id is: " + user2.id + " but he got no name so user 2 name is: " + user2.name);

module.exports = router;
