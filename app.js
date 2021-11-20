const express = require("express");

const app = express();

app.get('/currenttime', function(req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currentime

app.get('/', function(req, res) {
  res.send("<h1>Hello There!!!</h1>")
}); // localhost:3000/

app.listen(3000);
