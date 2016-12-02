var express = require('express');
var app = express();
var path = require('path');

var port = 3000;


var bodyParser = require('body-parser'); // reads post contents
var morgan = require('morgan'); // logs all requests to console



var env = "development";
// var env = "production";


if(env == "production"){
	console.log("production mode");
	app.use(express.static(__dirname + '/dist'));

	app.get('*',function(req,res){
		res.sendFile(path.join(__dirname + '/dist/index.html'));
	});
}
else{
	console.log("development mode");
	app.use(express.static(__dirname + '/src'));
	app.use(express.static(__dirname + '/bower_components'));

	app.get('*',function(req,res){
		res.sendFile(path.join(__dirname + '/src/index.html'));
	});
}

var api = require('./api.js')(app,express);
app.use('/api', api);



// app.use(express.static(__dirname));


app.listen(port, function(){
	console.log("listening on port: " + port);
});
