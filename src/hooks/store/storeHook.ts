import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux'
import { CounterState, CounterDispatch } from '../../app/store/hookStore';


export const useCounterDispatch: ()=> CounterDispatch = useDispatch //*Setting the type 
export const useCounterSelector: TypedUseSelectorHook<CounterState> = useSelector