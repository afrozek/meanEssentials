module.exports = tangent;

var request = require("request");
var apiConfig = require('./api.config.js')();
var tangent = apiConfig.tangentBaseUrl;




// api routes
function tangent (app, express) {

var tangent = express.Router();



// login
	tangent.post('/test', function (req, res) {
		res.status(200).send("tangent api working");
	}); //end login
	


// // login
// 	tangent.post('/login', function (req, res) {

// 		var data = req.body;

// 		request({
// 		  uri: tangent + '/auth/login/',
// 		  method: "POST",
// 		  form: data
// 		}, function(error, response, body) {
// 		  	if(response.statusCode == 400)
// 		  		res.status(401).send("error");

// 		});

// 	}); //end login



	return tangent;
}






