const express = require('express'),
	cors = require('cors'),
	path = require('path'),
	read = require('./public/readSheets');

let app = express(),
	//Change sheet ID to access other Spreadsheets
	sheetId = '1rKNuNUYNMBD0jlwR4ckqaMKZz3nK441iEH2PVCbCaI8';

//Enable Cors
app.use(cors());

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

//Get data from Spreadsheets
app.get('/maps', function(req, res){
	read.listMunicipalities(sheetId, function(err, data){
		res.json(data);
	})
})

app.listen(3000, function(){
	console.log('Server started in Port 3000');
})