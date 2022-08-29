import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../app/store/hookStore';
import { ICounterState } from '../../interfaces/store-interfaces';


const initialState: ICounterState = {
    value: 0
}
export const counterSlice = createSlice(
    {
        name:'counter',
        initialState,
        reducers:{
        
            increment: (state) => {
                state.value++;
            },
            decrement: (state) => {
                state.value--;
            },
            reset: (state) => {
                state.value = 0;
            }
        }

    }
)

export const { increment, decrement, reset }  = counterSlice.actions;

export const selectCount = (state: CounterState) => state.value

export default counterSlice.reducer;