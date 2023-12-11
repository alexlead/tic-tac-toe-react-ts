import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    playerCells: <number[]>[],
    PCCells:  <number[]>[]
}

export const sliceTictactoe = createSlice({
    name: 'tictactoe',
    initialState,
    reducers: {
        playerTurn: (state, action: PayloadAction<number>)=> {

            state.playerCells.push(action.payload);
        },
        aiPlayerTurn: (state, action: PayloadAction<number>)=> {
            state.PCCells.push(action.payload);
        },
        clearTurns: (state) => {
            state.playerCells = [];
            state.PCCells = [];
        }
    }
})


export const { playerTurn,  aiPlayerTurn, clearTurns } = sliceTictactoe.actions;
export default sliceTictactoe.reducer;