var express = require('express');
var app = express();
var path = require('path');

// app.use(express.static(__dirname + '/src'));
// app.use(express.static(__dirname + '/bower_components'));
// app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/dist'));

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// app.use(express.static(__dirname));


app.listen(3000);
