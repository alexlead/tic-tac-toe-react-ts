import React, { useEffect, useState } from 'react';
import { Board } from './model/Board';
import BoardComponent from './components/BoardComponent';
import SettingFormComponent from './components/SettingFormComponent';
import { useDispatch } from 'react-redux';
import { clearTurns } from './redux/tictactoe/sliceTictactoe';
import { AIPlayer } from './model/AIPlayer';

function App() {


  const [board, setBoard] = useState( new Board());
  const [AIPCplayer, setAIPCPlayer] = useState(new AIPlayer);

  const dispatch = useDispatch();

  useEffect(()=>{
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initBoard();
    setBoard(newBoard);

    setAIPCPlayer(new AIPlayer);

    dispatch( clearTurns() );

  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <SettingFormComponent board={board} restart={restart}/>
      <BoardComponent board={board} setBoard={setBoard} AIPCplayer={AIPCplayer} setAIPCplayer={setAIPCPlayer}/>
    </div>
  );
}

export default App;
