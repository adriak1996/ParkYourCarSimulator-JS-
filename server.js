'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    fs.readFile('app/html/main-page.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });
}).listen(port);
