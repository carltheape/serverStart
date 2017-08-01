// We require/import the HTTP module
var http = require("http");

var good = ["great", "awesome", "super"];
var bad = ["shit", "fuck", "ass"];

var PORTONE = 8080;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
  response.end(good[Math.floor(Math.random()*good.length)]);
}

function handleRequestTwo(request, response) {
  response.end(bad[Math.floor(Math.random()*bad.length)]);
}


var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);



serverOne.listen(PORTONE, function() {
  console.log('Server listening on: http://localhost:%s',PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log('Server listening on: http://localhost:%s',PORTTWO);
});
