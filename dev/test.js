const Blockchain = require("./blockchain");

const dukatoni = new Blockchain();

dukatoni.createNewBlock(420, "ASDFGHJKLY", "1q2w3e4r5t");
dukatoni.createNewTransaction(100, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
// dukatoni.createNewBlock(420, "QWERTZUIOP", "0o9i8u7z6t");
// dukatoni.createNewBlock(420, "YXCVBNMASD", "1234567891");

//testing createNewBlock method
console.log(dukatoni);

//testing getLastBlock method
// console.log("this is the last element of the blockchain");
// console.log(dukatoni.getLastBlock());
