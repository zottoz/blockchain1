import { Blockchain } from "./Blockchain";


const blockchain = new Blockchain();

blockchain.addBlock({
    from: 'denis',
    to: 'albert',
    amoung: 1000
});

blockchain.addBlock({
    from: 'denis',
    to: 'albert',
    amoung: 1000
});

console.log(blockchain);