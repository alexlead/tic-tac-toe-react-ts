import React from 'react';
import { render } from '@testing-library/react';
import BoardComponent from './BoardComponent';
import { AIPlayer } from '../model/AIPlayer';
import { Board } from '../model/Board';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';


describe('TicTacToe Playboard', () => {

    const mockStore = configureStore([]);
    let store: any;

    beforeEach(() => {
        store = mockStore({
            tictactoe: {
                playerCells: [],
                PCCells: []
            }
        });
    });

    it('board element is existed', () => {

        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <BoardComponent board={newBoard} setBoard={() => { }} AIPCplayer={new AIPlayer()} setAIPCplayer={() => { }} firstTurn={"PC"} />
            </Provider>
        )
        const board = container.querySelector('.board');

        expect(board).toBeInTheDocument;
    });
    it('number of board cells', () => {

        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <BoardComponent board={newBoard} setBoard={() => { }} AIPCplayer={new AIPlayer()} setAIPCplayer={() => { }} firstTurn={"PC"} />
            </Provider>
        )
        const boardCells = container.querySelectorAll('.cell');
        const cellsCount = boardCells.length;
        expect(cellsCount).toBe(9);
    });



})