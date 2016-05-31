// // include mongoose(libraries)
// var mongoose = require('mongoose');// DB connections
//
// // -- Connect to DB --
// // 'mongodb://localhost:27017/Database'
// var connection = mongoose.createConnection('mongodb://danny:danivolp89@ds049624.mlab.com:49624/ein_prat',function (error) {
//     console.log("Trying to connect to the Mlab DB....\n");
//
//     if(error){
//         console.log("Warning! Error occurred!\n\n");
//         console.log(error.name, "<- Is the error name\n", error.message , "<- Is the error message");
//     }
//     else{
//         console.log("App is now connected to Mlab DB");
//     }
// });
//
// module.exports = connection;   //if i want to use DB in other files;
//
