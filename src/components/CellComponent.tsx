import React, { FC, useEffect, useState } from 'react'
import { Cell } from '../model/Cell';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


interface CellProps {
    cell: Cell;
    selectCell: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selectCell}) => {

  const playerCells = useSelector((state: RootState)=> state.tictactoe.playerCells);
  const PCCells = useSelector((state: RootState)=> state.tictactoe.PCCells);

  const [ filled , setFilled ] = useState<string | null>("");

useEffect( () => {
  if( playerCells.includes(cell.id) || PCCells.includes(cell.id) ) {
    setFilled(cell.filled);
  } else {
    
    setFilled(null);
  }

}, [playerCells, PCCells, cell])

  return (
    <div className={['cell', cell.available ? "available": ""].join(' ')} onClick={()=>selectCell(cell)}>
        
   <div className="PC">{filled === "player" ? "X" : filled === "PC" ? "O" : "" }</div>
      

    </div>
  )
}

export default CellComponent