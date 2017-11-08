const http = require('http'),
	app = require('./app');

let port = process.env.PORT || 80;
app.set('port', port);

let server = http.createServer(app);
server.listen(port);