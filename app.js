
var http = require('http');
var module1 = require('./module1.js');
var module2 = require('./module2.js');
http.createServer(function (req, res) {
	res.writeHead(200);

	res.write(module1.randomNumber() + '\n');

	res.write(module2.toUSD() +  '\n');




	res.end();
}).listen(3000);
console.log('listening on port 3000');
