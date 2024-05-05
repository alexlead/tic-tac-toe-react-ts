import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Board } from './model/Board';
describe('TicTacToe App Test', () => {

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

    it('render App', () => {
        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const board = container.querySelector('.board');
        expect(board).toBeInTheDocument;
    })
    it('render App', () => {
        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const settingForm = container.querySelector('.setting-form');
        expect(settingForm).toBeInTheDocument;
    })

})