import { Board } from "./Board";
import { Cell } from "./Cell";

export class AIPlayer {

    
    PCRandomTurn( board: Board, ): number {
        let cellID: number = -1;
        while( cellID < 0) {

            const PCselectCell = Math.floor(Math.random()*9);
            // eslint-disable-next-line 
            board.cells.forEach(item => {
                if ( item.id === PCselectCell && item.available ) {
                    this.selectCell(item);
                    cellID = item.id;
                }                 
            })
        }
        return cellID;
    }


    PCAITurn (board: Board, PCCells: number[], PlayerCells: number[]):number {

        if( board.cells[4].available ) {
            this.selectCell(board.cells[4]);
            return 4;
        }
        


        // check if it is possible to win
        const winCellId = this.checkPossibleToWin(board, PCCells);
        if ( winCellId > -1 ) {
            this.selectCell(board.cells[winCellId]);
            return winCellId;
        }
        
        // check if it is possible to protect against human
        const protectCellId = this.checkPossibleToWin(board, PlayerCells);
        if ( protectCellId > -1 ) {
            this.selectCell(board.cells[protectCellId]);
            return protectCellId;
        }

        // first motion after user       
        if ( board.cells[0].available && !PlayerCells.includes(8) && PlayerCells.includes(4) ) {
            this.selectCell(board.cells[0]);
            return 0;          
        }
        
        // reduce risks
        if( board.cells[2].available && PlayerCells.includes(4) && PlayerCells.includes(8) ) {
            this.selectCell(board.cells[2]);
            return 2;
        }
        
        if ( PlayerCells.length === 1 && PCCells.includes(4) ) {
            if ( PlayerCells.includes(0) || PlayerCells.includes(2)){
                this.selectCell(board.cells[1]);
                return 1;
            }
            if ( PlayerCells.includes(6) || PlayerCells.includes(8)){
                this.selectCell(board.cells[7]);
                return 7;
            }

        }

        if ( PlayerCells.length === 2 && PCCells.includes(4) ) {

            if ( (PlayerCells.includes(0) || PlayerCells.includes(2)) && PlayerCells.includes(7)){
                this.selectCell(board.cells[3]);
                return 3;
            }

            if ( (PlayerCells.includes(6) || PlayerCells.includes(8)) && PlayerCells.includes(1)){
                this.selectCell(board.cells[5]);
                return 5;
            }
        }

        return this.PCRandomTurn(board);
    }


    private checkPossibleToWin ( board: Board, selectedCells: number[] ): number {

        for( let i=0; i<board.winnerCombinations.length; i++) {

            let selected = 0;
            let available = -1;
            let row = board.winnerCombinations[i];
            
            for( let j=0; j<row.length; j++) {

                if ( selectedCells.includes(row[j])) {
                    selected +=1;
                }

                if(board.cells[row[j]].available) {
                    available = row[j];
                }
            }

            if(selected===2 && available > -1) {
                return available;
            }

        }

        return -1;
    }



    private selectCell (cell: Cell):void {
        cell.available = false;
        cell.filled = 'PC';
    }

}