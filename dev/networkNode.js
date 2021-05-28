var express = require("express");
var app = express();

app.get("/blockchain", (req, res) => {
  res.send("blockchain endpoint");
});

app.get("/transaction", (req, res) => {
  res.send("transaction endpoint");
});

app.get("/mine", (req, res) => {
  res.send("mine endpoint");
});

app.listen(8000);
