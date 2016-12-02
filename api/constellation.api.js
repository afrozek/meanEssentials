module.exports = constellation;

var request = require("request");
var apiConfig = require('./api.config.js')();
var constellationBaseUrl = apiConfig.constellationBaseUrl;




// api routes
function constellation (app, express) {

var constellation = express.Router();



// login
	constellation.post('/test', function (req, res) {
		res.status(200).send("constellation api working");
	}); //end login
	


// // login
// 	constellation.post('/login', function (req, res) {

// 		var data = req.body;

// 		request({
// 		  uri: constellation + '/auth/login/',
// 		  method: "POST",
// 		  form: data
// 		}, function(error, response, body) {
// 		  	if(response.statusCode == 400)
// 		  		res.status(401).send("error");

// 		});

// 	}); //end login



	return constellation;
}






