import { Board } from "./Board";
import { Cell } from "./Cell"

describe('class Cell test', () => {
    let board: Board = new Board();
    board.initBoard();
    it('Create new Cell', () => {
        const cell = new Cell(board, 10);
        expect(cell.id).toBe(10)
    })
    it('Fill  Cell', () => {
        const cell = new Cell(board, 11);
        cell.setFilled("PC")
        expect(cell.filled).toBe("PC")
    })

})