/*importing sha256 module */
const sha256 = require('sha256');

/* main blockchain code */

/*main object of the blockchain */
function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  //creating initial block in blockchain
  this.createNewBlock(100,'0','0');
}

//method for creating new block and adding it to blckhn

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  //new block object
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash,
  };

  //setting pendingTransactions array to null
  this.pendingTransactions = [];

  //adding block to chain
  this.chain.push(newBlock);

  return newBlock;
};

//getting the last block method
Blockchain.prototype.getLastBlock = function () {
  //indexing the last element of the array
  return this.chain[this.chain.length - 1];
};

/*method for creating new transaction that accepts 3 parameters:
        1. amount
        2. sender
        3. recipient

*/
Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  //newTransaction object that will be added to transactions array
  const newTransaction = {
    amount,
    sender,
    recipient,
  };

  this.pendingTransactions.push(newTransaction);
  return this.getLastBlock()["index"] + 1;
};

//hashing data from current block

Blockchain.prototype.hashBlock = function (previousBlockHash,currentBlockData,nonce) {
  //previousBlockHash is already a string, nonce is a number so it needs conversion and current blockdata is a JSON object 
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
}

Blockchain.prototype.proofOfWork= function (previousBlockHash,currentBlockData)
{
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
  while(hash.substring(0,4) != '0000')
  {
    nonce++;
    hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
  }
  return nonce;
}

module.exports = Blockchain;
