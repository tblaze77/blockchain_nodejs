const Blockchain = require('./blockchain');

const dukatoni = new Blockchain();

dukatoni.createNewBlock(420, 'ASDFGHJKLY', '1q2w3e4r5t');
dukatoni.createNewBlock(420, 'QWERTZUIOP', '0o9i8u7z6t');
dukatoni.createNewBlock(420, 'YXCVBNMASD', '1234567891');

console.log(dukatoni);