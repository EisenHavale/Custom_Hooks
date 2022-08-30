import React, { useState } from 'react'

export const useCounter = (initialState=0, ) => {
    const [count, setCount] = useState(initialState);
    
    const increment =(value:number)=>{
        setCount(count + value);
    }

    const decrement =(value:number)=>{
        setCount(count - value);
    }

    const reset =(initialState:number) => {
        setCount(initialState);
    }

    return { count, increment, decrement, reset };
}
