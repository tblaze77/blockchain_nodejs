const Blockchain = require("./blockchain");

const dukatoni = new Blockchain();

dukatoni.createNewBlock(420, "ASDFGHJKLY", "1q2w3e4r5t");
dukatoni.createNewTransaction(100, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
dukatoni.createNewBlock(555, "QWERTZUIOP", "q1w2e3r4t5");
dukatoni.createNewTransaction(554, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
dukatoni.createNewTransaction(556, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
dukatoni.createNewTransaction(557, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
//adding new element of the block
dukatoni.createNewBlock(555, "QWERTZUIOP", "q1w2e3r4t5");


//adding pending transactions to newly created block
console.log(dukatoni.chain[2]);


