const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	path = require('path'),
	read = require('./public/readSheets');

let app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Enable Cors
app.use(cors());

// Set Static Path
app.use(express.static('public'));

//Get data from Spreadsheets
app.get('/maps/:sheetId', function(req, res){
	read.listMunicipalities(req.params.sheetId, function(err, data){
		res.json(data);
	})
})

module.exports = app;