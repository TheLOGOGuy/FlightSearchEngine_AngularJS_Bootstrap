var express = require("express"),
http = require('http');
var app = express();
app.use(express.static(__dirname));

app.all('/', function(req, res, next) {
// Just send the index.html for other files to support HTML5Mode
res.sendFile('index.html', { root: __dirname });
});
app.listen(3000);
console.log("Listening at port 3000");