module.exports = api;

var request = require("request");






// api routes
function api (app, express) {

	var api = express.Router();
	


// login
	api.post('/login', function (req, res) {

		var data = req.body;

		request({
		  uri: 'http://192.168.14.12:8000/2e720b4/auth/login/',
		  method: "POST",
		  form: data
		}, function(error, response, body) {
		  	if(res.statusCode == 400)
		  		res.status(401)
		  	else res.send(response)
		});

	}); //end login



	return api;
}






