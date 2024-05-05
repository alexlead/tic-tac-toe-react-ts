import React from 'react';
import { render } from '@testing-library/react';
import SettingFormComponent from './SettingFormComponent';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Board } from '../model/Board';
describe('Test Setting Form', () => {

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


    it('render Setting button exists', () => {

        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <SettingFormComponent board={newBoard} restart={() => { }} firstTurn={"Human"} />
            </Provider>
        )
        const buttonElement = container.querySelector('button');
        expect(buttonElement?.textContent).toBe('New Game');
    });
    it('render Setting for Human first turn', () => {

        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <SettingFormComponent board={newBoard} restart={() => { }} firstTurn={"Human"} />
            </Provider>
        )
        const turnStatusElement = container.querySelector('p');
        expect(turnStatusElement?.textContent).toBe('Human turns first!');
    });
    it('render Setting for PC first turn', () => {

        const newBoard = new Board();
        newBoard.initBoard();

        const { container } = render(
            <Provider store={store}>
                <SettingFormComponent board={newBoard} restart={() => { }} firstTurn={"PC"} />
            </Provider>
        )
        const turnStatusElement = container.querySelector('p');
        expect(turnStatusElement?.textContent).toBe('PC turns first!');
    });
})