import { Board } from "./Board";

export type CellFillType = "player" | "PC" | null;

export class Cell {

    readonly id: number;
    board: Board;
    available: boolean;
    // id: number;
    filled: CellFillType;


    constructor(board: Board, x: number) {
        this.board = board;
        this.id = x;
        this.available = true;
        this.filled = null;
    }

    public setFilled(filled: CellFillType) {
        this.filled = filled;
    }



}