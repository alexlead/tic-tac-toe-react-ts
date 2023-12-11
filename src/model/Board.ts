import { Cell } from "./Cell";

export class Board  {

    cells: Cell[] = []

    public initBoard () {
        for (let i=0; i<9; i++) {
            this.cells.push(new Cell( this, i));
        }
    }


}