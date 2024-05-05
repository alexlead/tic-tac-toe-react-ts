import { AIPlayer } from './AIPlayer';
import { Board } from "./Board";
import { Cell } from "./Cell";


describe('Test AI functions', () => {

    let board: Board = new Board();
    board.initBoard();
    let aiPlayer: AIPlayer = new AIPlayer();

    it('AI turns 0', () => {
        expect(aiPlayer.PCAITurn(board, [], [])).toBe(4)
    })
    it('AI turns 1', () => {
        expect(aiPlayer.PCAITurn(board, [], [4])).toBe(0)
    })
    it('AI turns 2', () => {
        expect(aiPlayer.PCAITurn(board, [4], [8])).toBe(7)
    })
    it('AI turns 3', () => {
        expect(aiPlayer.PCAITurn(board, [4], [0])).toBe(1)
    })
    it('AI turns 4', () => {
        expect(aiPlayer.PCAITurn(board, [4], [8])).toBe(7)
    })
    it('AI Random turn', () => {
        const cellId = aiPlayer.PCRandomTurn(board);
        const results = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        expect(results.includes(cellId)).toBe(true)
    })
})