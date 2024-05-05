import React from 'react';
import { render } from '@testing-library/react';
import CellComponent from './CellComponent';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { Cell } from '../model/Cell';
import { Board } from '../model/Board';
import { Provider } from 'react-redux';
describe('Playboard Cells', () => {

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

    it('render Board Cell', () => {
        const newBoard = new Board();
        const cell: Cell = new Cell(newBoard, 1)
        const { container } = render(
            <Provider store={store}>
                <CellComponent key={1} cell={cell} selectCell={() => { }} />
            </Provider>
        )
        const cellItem = container.querySelector('.cell');

        expect(cellItem).toBeInTheDocument;

    })


})