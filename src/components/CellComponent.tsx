import React, { FC } from 'react'
import { Cell } from '../model/Cell';


interface CellProps {
    cell: Cell;
    selectCell: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selectCell}) => {
  return (
    <div className={['cell', cell.available ? "available": ""].join(' ')} onClick={()=>selectCell(cell)}>
        {
            cell.filled && !cell.available && <div className={cell.filled}>{cell.filled === "player" ? "X" : cell.filled === "PC" ? "O" : "" }</div>

        }

    </div>
  )
}

export default CellComponent