var app = require('express'); // get express for server init
var path = require('path');// get the path


//init for using POST calls
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data


//static routes init
app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use('/font', express.static('public/font'));
app.use(express.static('views'));





