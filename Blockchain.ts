import { Block } from "./Block";

export class Blockchain{
    previousBlock;
    blockList: Array<Block> = [];

    constructor(){
        this.previousBlock = 'Genesys';
        const startBlock = new Block(this.previousBlock, {}, 0);
        this.blockList.push(startBlock);
    }

    addBlock(data: {}){

        let index = this.blockList.length;

        const newBlock = new Block(this.blockList[index-1].getHash(), data, index);

        this.blockList.push(newBlock);
    }

}