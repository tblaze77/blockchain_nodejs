const Blockchain = require("./blockchain");


const dukatoni = new Blockchain();

const previousBlockHash = '87765DA6CCF0668238C2D27CR5692G11'

const currentBlockData = [
    {
    amount: 10,
    sender: 'B4CEE9C0E5CD571',
    recipient: '3A3F6E462D48E9',
    },
    {
        amount: 10,
        sender: 'ASDFGHRTGLCKEQW',
        recipient: '3AMF6G46234849',
        },
        {
            amount: 20,
            sender: '4CEE9C0E5CJERGE',
            recipient: '2A3F6E462D48E9',
            }
    ]

const nonce = 200;

console.log(dukatoni.hashBlock(previousBlockHash, currentBlockData, nonce));



