

//==============================================================
// DEPENDENCIES
//==============================================================
var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var bodyParser = require('body-parser'); // reads post contents
var morgan = require('morgan'); // logs all requests to console


//==============================================================
// CONFIG
//==============================================================

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



//==============================================================
// API
//==============================================================


// handle CORS requests(cross origin resource sharing)
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET,POST');
	res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// log all requests to console
app.use(morgan('dev'));

//routes

var rippleApi = require('./api/ripple.api.js')(app,express);
app.use('/account', rippleApi);

var tangentApi = require('./api/tangent.api.js')(app,express);
app.use('/compute', tangentApi);

var constellationApi = require('./api/constellation.api.js')(app,express);
app.use('/billing', constellationApi);




//==============================================================
// SERVER START
//==============================================================


app.listen(port, function(){
	console.log("listening on port: " + port);
});







