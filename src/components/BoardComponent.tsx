import React, { FC,  useEffect,  useState } from 'react'
import { Board } from '../model/Board'
import CellComponent from './CellComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Cell } from '../model/Cell';
import { aiPlayerTurn, playerTurn } from '../redux/tictactoe/sliceTictactoe';
// import { RootState } from '../redux/store';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

export type TurnStatus = "Player" | "PC" | null;

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    // const playerCells = useSelector((state: RootState)=> state.tictactoe.playerCells);
    // const PCCells = useSelector((state: RootState)=> state.tictactoe.PCCells);

    const dispatch = useDispatch();

    const [turn, setTurn] =useState<TurnStatus>("Player");

    useEffect( ()=> {

      
        if ( turn === "PC" ) {
            
            const PCselectCell = Math.floor(Math.random()*9);
            console.log( PCselectCell );
            board.cells.forEach(item => {
                if ( item.id === PCselectCell && item.available ) {

                    setTurn('Player');
                    item.available = false;
                    item.filled = 'PC';
                    dispatch(aiPlayerTurn(item.id)); 
                }                 
            })
            }  


    }, [turn, board.cells, dispatch])
    
    function selectCell ( cell: Cell) {
        if(cell.available ) {
            setTurn('PC')
            cell.available = false;
            cell.filled = 'player';
            dispatch(playerTurn(cell.id));            
        }
    }

  return (
    <div className='board'>
        {
            board.cells?.map((cell, index)=><CellComponent key={index} cell={cell} selectCell={()=>selectCell(cell)}/>)
        }
    </div>
  )
}

export default BoardComponent