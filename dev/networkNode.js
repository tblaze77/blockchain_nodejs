var express = require("express");
var app = express();
const bodyParser = require ('body-parser');
const Blockchain = require("./blockchain");

const dukatoni = new Blockchain();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/blockchain", (req, res) => {
  res.send(dukatoni);
});

app.get("/transaction", (req, res) => {
  res.send("transaction endpoint");
});

app.post("/transaction", function(req, res) {
  const blockIndex = dukatoni.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
  res.json({note: `transaction wil be added in block ${blockIndex}.`})
});

app.get("/mine", (req, res) => {
  res.send("mine endpoint");
});

app.listen(8000, (err) => {
  if(err) console.log('error in starting server')
  else console.log('server is listening on port 8000');
});
