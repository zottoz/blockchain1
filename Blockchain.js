"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
var Block_1 = require("./Block");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.blockList = [];
        this.previousBlock = 'Genesys';
        var startBlock = new Block_1.Block(this.previousBlock, {}, 0);
        this.blockList.push(startBlock);
    }
    Blockchain.prototype.addBlock = function (data) {
        var index = this.blockList.length;
        var newBlock = new Block_1.Block(this.blockList[index - 1].getHash(), data, index);
        this.blockList.push(newBlock);
    };
    return Blockchain;
}());
exports.Blockchain = Blockchain;
