import React, { useEffect, useState } from 'react';
import { Board } from './model/Board';
import BoardComponent from './components/BoardComponent';
import SettingFormComponent from './components/SettingFormComponent';
import { useDispatch } from 'react-redux';
import { clearTurns } from './redux/tictactoe/sliceTictactoe';

function App() {


  const [board, setBoard] = useState( new Board());

  const dispatch = useDispatch();

  useEffect(()=>{
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initBoard();
    setBoard(newBoard);
    dispatch( clearTurns() );

  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <SettingFormComponent board={board} restart={restart}/>
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
