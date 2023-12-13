import React, { FC, useEffect } from 'react'
import { Board } from '../model/Board'
import CellComponent from './CellComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Cell } from '../model/Cell';
import { aiPlayerTurn, playerTurn } from '../redux/tictactoe/sliceTictactoe';
import { AIPlayer } from '../model/AIPlayer';
import { RootState } from '../redux/store';


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    AIPCplayer: AIPlayer;
    setAIPCplayer: (AIPCplayer: AIPlayer) => void;
    firstTurn: string;
}

export type TurnStatus = "Player" | "PC" | null;

const BoardComponent: FC<BoardProps> = ({ board, setBoard, AIPCplayer, setAIPCplayer , firstTurn}) => {
    const playerCells = useSelector((state: RootState)=> state.tictactoe.playerCells);
    const PCCells = useSelector((state: RootState)=> state.tictactoe.PCCells);
    const dispatch = useDispatch();

    function PCTurn() {
        if (!board.checkAvailableCells() && !board.gameRunning && board.getWinner() === "") {
            const id = AIPCplayer.PCAITurn(board, PCCells, playerCells);
            dispatch(aiPlayerTurn(id));
        }
    }

    useEffect(()=>{
        if(playerCells.length>0 || firstTurn==="PC") {
            PCTurn();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playerCells])

    function selectCell(cell: Cell) {
        if (cell.available && !board.checkAvailableCells() && board.getWinner() === "" ) {
            dispatch(playerTurn(cell.id));
            cell.available = false;
            cell.filled = 'player';
            
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