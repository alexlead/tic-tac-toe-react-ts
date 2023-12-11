import { configureStore } from "@reduxjs/toolkit";
import sliceTictactoe from "./tictactoe/sliceTictactoe";


export const store = configureStore({
    reducer: {
        tictactoe: sliceTictactoe
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;