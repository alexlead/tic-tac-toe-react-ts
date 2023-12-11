import { Board } from "./Board";

export type CellFillType = "player" | "PC" | null;

export class Cell {

readonly x: number;
    board: Board;
    available: boolean;
    id: number;
    filled: CellFillType;


constructor (board: Board, x: number  ) {

    this.board = board;
    this.x = x;
    this.id = Math.random();
    this.available = true;
    this.filled = null;

}

public setFilled ( filled: CellFillType) {
    this.filled = filled;
}



}