var express = require("express");
var app = express();
const bodyParser = require ('body-parser');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/blockchain", (req, res) => {
  res.send("blockchain endpoint");
});

app.get("/transaction", (req, res) => {
  res.send("transaction endpoint");
});

app.get("/mine", (req, res) => {
  res.send("mine endpoint");
});

app.post("/transaction", (req,res) => {
  console.log(req.body);
  res.send(`the amount of the transaction is ${req.body.amount} dukatoni's`);
})

app.listen(8000, (err) => {
  if(err) console.log('error in starting server')
  else console.log('server is listening on port 8000');
});
