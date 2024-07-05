"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var crypto_1 = require("crypto");
var Block = /** @class */ (function () {
    function Block(previousHash, data, indexBlock) {
        this.indexBlock = indexBlock;
        this.previousHash = previousHash;
        this.data = data;
        this.hash = this.generateHash();
        this.timestamp = new Date();
    }
    Block.prototype.generateHash = function () {
        var message = this.indexBlock + this.previousHash + this.data;
        return (0, crypto_1.createHash)('sha256').update(message).digest('hex');
    };
    Block.prototype.getHash = function () {
        return this.hash;
    };
    return Block;
}());
exports.Block = Block;
