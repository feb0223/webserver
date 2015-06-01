var express = require('express')
var basicAuth = require('basic-auth-connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');

module.exports = function(rootDir) {
	var app = express();

	if (process.env.BASIC_AUTH_USER) {
		app.use(basicAuth(process.env.BASIC_AUTH_USER, process.env.BASIC_AUTH_PASS));
	}
	app.use(serveIndex(rootDir));
	app.use(serveStatic(rootDir));

	var port = process.env.PORT || 3000;
	app.listen(port);
	console.log('Webserver started at http://0.0.0.0:' + port);
};