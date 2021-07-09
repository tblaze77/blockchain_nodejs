var express = require("express");
var app = express();
const bodyParser = require ('body-parser');
const Blockchain = require("./blockchain");
const uuid = require ('uuid');

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
  const lastBlock = dukatoni.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: dukatoni.pendingTransactions,
    index: lastBlock['index'] +1
  };
  const nonce = dukatoni.proofOfWork(previousBlockHash, currentBlockData)
  const blockHash = dukatoni.hashBlock(previousBlockHash, currentBlockData, nonce);
  const newBlock = dukatoni.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: 'new block has been mined successfully',
    block: newBlock
  });
  const nodeAddress = uuid.v5().split('-').join('');
  dukatoni.createNewTransaction(13, "00", nodeAddress)
});

app.listen(8000, (err) => {
  if(err) console.log('error in starting server')
  else console.log('server is listening on port 8000');
});
