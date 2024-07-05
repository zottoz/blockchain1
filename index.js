"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blockchain_1 = require("./Blockchain");
var blockchain = new Blockchain_1.Blockchain();
blockchain.addBlock({});
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
