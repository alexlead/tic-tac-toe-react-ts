import { Cell } from "./Cell";

export class Board  {

    cells: Cell[] = [];
    winnerCombinations: number[][] = [];
    gameRunning: boolean;


    constructor () {

        this.winnerCombinations = [
            [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ];

        this.gameRunning = true;
    }


    public initBoard () {
        for (let i=0; i<9; i++) {
            this.cells.push(new Cell( this, i));
        }
    }


    public checkWinner ( playersCells: number[] ): boolean {
       
        for( let i = 0; i < 8; i++) {
           if (this.winnerCombinations[i].every( item => playersCells.includes(item)) ){ 
            this.gameRunning = false;
            return true;
        }
        }
        this.checkAvailableCells();
        return false;
    }


    public checkAvailableCells (): void {
        for( let i = 0 ; i < 9 ; i++) {
            this.gameRunning = this.cells.every(cell => !cell.available);
        }
    }


}