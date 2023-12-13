import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Board } from '../model/Board';


interface SettingProps {
  board: Board;
  restart: ()=> void;
  firstTurn: string;
}

type Winner = 'Player' | 'PC' | 'drawn' | null;

const SettingFormComponent: FC<SettingProps> = ({board, restart, firstTurn}) => {

  const playerCells = useSelector((state: RootState)=> state.tictactoe.playerCells);
  const PCCells = useSelector((state: RootState)=> state.tictactoe.PCCells);

  const [winner, setWinner] =useState<Winner>(null);

  useEffect ( ()=> {
    if ( board.checkWinner( playerCells ) ) {
      setWinner("Player");
      board.setWinner('Player');
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
      board.setWinner("PC");
    };

    if ( board.checkAvailableCells() && !winner) {
      
      setWinner("drawn");
    }

}, [PCCells, board, winner]);




  return (
    <div className='setting-form'>
        <button onClick={restart}>New Game</button>
        <p>{firstTurn} turns first!</p>
      {
        winner !== null ? (

          winner === "Player" ? (           
          <div className="ribbon">
          <div className="ribbon-stitches-top"></div>
          <div className="ribbon-content"><p className='winner'><span className='star'></span> Player is winner! <span className='star'></span></p></div>
          <div className="ribbon-stitches-bottom"></div>
          </div>
          )
          : (winner === "PC" ? (
            <div className="ribbon">
          <div className="ribbon-stitches-top"></div>
          <div className="ribbon-content"><p className='winner'><span className='star'></span> PC is winner! <span className='star'></span></p></div>
          <div className="ribbon-stitches-bottom"></div>
          </div>
          
          ) : (
            winner === "drawn" && 
            
            <div className="ribbon">
          <div className="ribbon-stitches-top"></div>
          <div className="ribbon-content"><p className='winner'>Drawn game!</p></div>
          <div className="ribbon-stitches-bottom"></div>
          </div>
          ) )
          ) : (
            <div className='winner'></div>
        )
      }
    </div>
  )
}

export default SettingFormComponent