//include variables and exists libraries
var express = require('express');
var app =  express();
var path = require('path');// get the path

//init for using POST calls
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data

//static routes init
app.use('/javascripts', express.static('public/javascripts'));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use('/font', express.static('public/font'));
app.use('/stylesheets', express.static('public/stylesheets'));
app.use(express.static('views'));


// -- Main route --
app.get('/', function (req,res) {
    res.sendfile(path.join(__dirname + "../../views/index.ejs"));
});
