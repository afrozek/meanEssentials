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
		  	// res.send(response)
		  	if(response.statusCode == 400)
		  		res.status(400).json({status: false})
		  	else res.send(response.body)

		});

	}); //end login



	return ripple;
}






