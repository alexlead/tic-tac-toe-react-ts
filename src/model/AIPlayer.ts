import { Board } from "./Board";

export class AIPlayer {

    
    PCRandomTurn( board: Board, ): number {
        let cellID: number = -1;
        while( cellID < 0) {

            const PCselectCell = Math.floor(Math.random()*9);
            console.log(PCselectCell);
            
            board.cells.forEach(item => {
                if ( item.id === PCselectCell && item.available ) {
                    item.available = false;
                    item.filled = 'PC';
                    cellID = item.id;
                }                 
            })
        }
        return cellID;
    }

    PCAITurn () {


    }

}