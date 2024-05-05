import { render } from '@testing-library/react';
import { Board } from './Board';
describe('class Board test', () => {

    let board: Board = new Board();
    it('Board cells quantity is equal 9', () => {
        board.initBoard();
        expect(board.cells.length).toBe(9);
    })
    it('Set Winner PC', () => {
        board.setWinner("PC");
        expect(board.winner).toBe("PC");
    })
    it('Set Winner Human', () => {
        board.setWinner("Human");
        expect(board.winner).toBe("Human");
    })
    it('Get Winner Function', () => {
        board.setWinner("Human");
        expect(board.getWinner()).toBe("Human");
    })
    it('Get checkAvailableCells', () => {
        expect(board.checkAvailableCells()).toBe(false);
    })

    it('Check Win combination 1', () => {
        expect(board.checkWinner([0, 1, 2])).toBe(true);
    })
    it('Check Win combination 2', () => {
        expect(board.checkWinner([3, 4, 5])).toBe(true);
    })
    it('Check unWin combination ', () => {
        expect(board.checkWinner([3, 4, 7])).toBe(false);
    })
})