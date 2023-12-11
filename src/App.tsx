import React, { useEffect, useState } from 'react';
import { Board } from './model/Board';
import BoardComponent from './components/BoardComponent';
import SettingFormComponent from './components/SettingFormComponent';

function App() {


  const [board, setBoard] = useState( new Board());

  useEffect(()=>{
    restart();
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initBoard();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <SettingFormComponent/>
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
