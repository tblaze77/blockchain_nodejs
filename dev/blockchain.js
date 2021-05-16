/* main blockchain code */


/*main object of the blockchain */
function Blockchain () {

    this.chain=[];
    this.newTransactions=[];

}

//method for creating new block and adding it to blckhn

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    //new block object
    const newBlock = {
        index: this.chain.length +1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    //setting newTransactions array to null 
    this.newTransactions = [];

    //adding block to chain
    this.chain.push(newBlock);

    return newBlock;
}


module.exports = Blockchain;