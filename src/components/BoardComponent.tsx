import React, { FC } from 'react'
import { Board } from '../model/Board'
import CellComponent from './CellComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Cell } from '../model/Cell';
import { playerTurn } from '../redux/tictactoe/sliceTictactoe';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const playerCells = useSelector((state: RootState)=> state.tictactoe.playerCells);
    const PCCells = useSelector((state: RootState)=> state.tictactoe.PCCells);
    const dispatch = useDispatch();

    function selectCell ( cell: Cell) {
        if(cell.available) {
            cell.available = false;
            cell.filled = 'player';
            dispatch(playerTurn(cell.x));
            console.log( playerCells );
        }
    }

  return (
    <div className='board'>
        {
            board.cells?.map((cell, index)=><CellComponent cell={cell} selectCell={()=>selectCell(cell)}/>)
        }
    </div>
  )
}

export default BoardComponent