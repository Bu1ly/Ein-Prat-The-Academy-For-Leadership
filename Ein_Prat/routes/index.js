var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ein_Prat' });
});

router.get('theList',function(req,res){
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/Ein_Prat';
  MongoClient.connect(url,function(error,db){
    if(error)
      console.log('Unale to connect to the mongo',error);
    else{
      console.log("Connection established");

      var collection = db.collection('seniors');

      collection.find({}).toArray(function (error,result){
        if(error)
          res.send(error);
        else if(result.length){
          res.render('seniorList',{
            "seniourList" : result
          });
        }else{
          res.send('No docs found');
        }
        db.close();
      });
    }
  });
});

module.exports = router;
