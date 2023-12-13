import React, { FC, useEffect, useState } from 'react'
import { Board } from '../model/Board'
import CellComponent from './CellComponent';
import { useDispatch } from 'react-redux';
import { Cell } from '../model/Cell';
import { aiPlayerTurn, playerTurn } from '../redux/tictactoe/sliceTictactoe';
import { AIPlayer } from '../model/AIPlayer';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    AIPCplayer: AIPlayer;
    setAIPCplayer: (AIPCplayer: AIPlayer) => void;
}

export type TurnStatus = "Player" | "PC" | null;

const BoardComponent: FC<BoardProps> = ({ board, setBoard, AIPCplayer, setAIPCplayer }) => {

    const dispatch = useDispatch();

    function PCTurn() {
        if (!board.checkAvailableCells() && !board.gameRunning) {
            dispatch(aiPlayerTurn(AIPCplayer.PCRandomTurn(board)));
        }
    }

    function selectCell(cell: Cell) {
        if (cell.available && !board.checkAvailableCells() && !board.gameRunning) {
            cell.available = false;
            cell.filled = 'player';
            dispatch(playerTurn(cell.id));
            PCTurn();
        }
    }

    return (
        <div className='board'>
            {
                board.cells?.map((cell, index) => <CellComponent key={index} cell={cell} selectCell={() => selectCell(cell)} />)
            }
        </div>
    )
}

export default BoardComponent