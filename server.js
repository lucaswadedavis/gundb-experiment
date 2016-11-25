var port = process.argv[2] || process.env.PORT || 8080;

var express = require('express');
var join = require('path').join;
var Gun = require('gun');

var gun = new Gun();
var app = express();

gun.wsp(app);

var webClient = join(__dirname, 'web-client');
app.use(express.static(webClient));

app.listen(port, function () {
    console.log('Server started on port', port, 'with /gun');
});
