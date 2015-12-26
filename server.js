//Set up basic requires
//Express for server and router
var express = require('express');
var router = express();
var server = require('http').createServer(router);

//Helper middleware
var path = require('path');
var bp = require('body-parser');
//For parsing post requests
router.use(bp.urlencoded({extended: false}));

//Use client folder for static html files
router.use(express.static(path.resolve(__dirname, 'client')));

//MongoDB stuffs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/giraffle');

//Initialize the models for database
var models = require('./server/models/models.js')(mongoose);

//Initialize the api routes
var routes = require('./server/routes/index')(router, models);

//Start up the server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Giraffle server listening at", addr.address + ":" + addr.port);
});

//Currently unused stuffs
//var async = require('async');
//var socketio = require('socket.io');
//var fs = require('fs');