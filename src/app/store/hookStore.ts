import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counterSlice/CounterSlices";

export const HookStore = configureStore(
    {
        reducer: counterReducer, 
    }
)


export type CounterState = ReturnType<typeof HookStore.getState>
export type CounterDispatch = typeof HookStore.dispatch