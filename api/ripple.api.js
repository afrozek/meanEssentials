module.exports = ripple;

var request = require("request");
var apiConfig = require('./api.config.js')();
var ripple = apiConfig.rippleBaseUrl;




// api routes
function ripple (app, express) {

var ripple = express.Router();
	


// login
	ripple.post('/login', function (req, res) {

		var data = req.body;

		request({
		  uri: ripple + '/auth/login/',
		  method: "POST",
		  form: data
		}, function(error, response, body) {
		  	if(response.statusCode == 400)
		  		res.status(401).send("error");

		});

	}); //end login



	return ripple;
}






