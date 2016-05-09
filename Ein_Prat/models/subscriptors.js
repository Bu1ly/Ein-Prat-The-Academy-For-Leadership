var dataBase = require('mongodb');
var server = require('mongodb');

var dPort = 27017;
var dHost = 'localhost';
var dName = 'ein_prat';

var seniors = {};

// define the dataBase
seniors.db = new dataBase(dName, new server(dHost, dPort, {auto_reconnect:true},{}));

// open the dataBase
seniors.db.open(function(e){
    if(e){
        console.log(e);
    }else{
        console.log("The connection with the Database:" + dName +  "is succeed");
    }
});

seniors.subcriptors = seniors.db.collection('subscriptors');
module.exports = seniors;

// check if the id is already exist
subs.new = function(newData, callback){
    subs.subscriptors.findOne( { id: newData.id }, function(e, obj){
        if(obj){
            callback('The id is already exist');
        }else{
            subs.subscriptors.insert(newData, callback(null))
        }
    }  );
}
