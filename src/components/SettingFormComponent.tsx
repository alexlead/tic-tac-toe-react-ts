import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Board } from '../model/Board';


interface SettingProps {
  board: Board;
  restart: ()=> void;
}

type Winner = 'Player' | 'PC' | 'drawn' | null;

const SettingFormComponent: FC<SettingProps> = ({board, restart}) => {

  const playerCells = useSelector((state: RootState)=> state.tictactoe.playerCells);
  const PCCells = useSelector((state: RootState)=> state.tictactoe.PCCells);

  const [winner, setWinner] =useState<Winner>(null);

  useEffect ( ()=> {
    if ( board.checkWinner( playerCells ) ) {
      setWinner("Player");
    };
    
    if( !playerCells.length) {
      setWinner(null);
    }
    
    if ( board.checkAvailableCells() && !winner) {
      
      setWinner("drawn");
    }
}, [playerCells, board, winner]);

  useEffect ( ()=> {
    if ( board.checkWinner( PCCells ) ) {
      setWinner("PC");
    };
}, [PCCells, board]);




  return (
    <div className='setting-form'>
        <button onClick={restart}>New Game</button>
      {
        winner !== null ? (
          winner === "Player" ? (<div className='winner'><span className='star'></span> Player is winner! <span className='star'></span></div>)
          : (winner === "PC" ? (<div className='winner'><span className='star'></span> PC is winner! <span className='star'></span></div>) : (
            winner === "drawn" && <div className='winner'>Drawn game!</div>
          ) )
          ) : (
            <div className='winner'></div>
        )
      }
    </div>
  )
}

export default SettingFormComponent