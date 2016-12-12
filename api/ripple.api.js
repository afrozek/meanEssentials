module.exports = ripple;

var request = require("request");
var apiConfig = require('./api.config.js')();
var rippleBaseUrl = apiConfig.rippleBaseUrl;




// api routes
function ripple (app, express) {

var ripple = express.Router();
	


// login
	ripple.post('/login', function (req, res) {

		var data = req.body;

		request({
		  uri: rippleBaseUrl + '/auth/login/',
		  method: "POST",
		  form: data
		}, function(error, response, body) {
		  	console.log(response.statusCode)

		  	if(response.statusCode == 200){
		  		res.send(response.body)	;
		  	}
		  	else {
		  		// res.status(400).json({status: false})
		  		res.status(400).send(response.body);
		  	}

		  	 

		});

	}); //end login

// signup
	ripple.post('/signup', function (req, res) {

		var data = req.body;

		request({
		  uri: rippleBaseUrl + '/auth/register/',
		  method: "POST",
		  form: data
		}, function(error, response, body) {
		  	console.log(response.statusCode)

		  	if(response.statusCode == 200 || response.statusCode == 201){
		  		res.send(response.body)	;
		  	}
		  	else {
		  		// res.status(400).json({status: false})
		  		res.status(400).send(response.body);
		  	}

		  	 

		});

	}); //end signup


	return ripple;
}






