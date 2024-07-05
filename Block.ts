import { createHash } from "crypto";

export class Block{
    indexBlock;
    previousHash;
    data;
    hash;
    timestamp;

    constructor(previousHash: string, data: {}, indexBlock: number ){
        this.indexBlock = indexBlock;
        this.previousHash = previousHash;
        this.data = data;
        this.hash = this.generateHash();
        this.timestamp = new Date();
    }

    generateHash(): string{

        let message = this.indexBlock + this.previousHash + this.data;

        return createHash('sha256').update(message).digest('hex');

    }   

    getHash(): string{
        return this.hash;
    }
}

