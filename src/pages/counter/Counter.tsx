import React, { useState } from "react";
import { Button } from "../../components/atoms/button/Button";
import { Title } from "../../components/atoms/title/Title";
import { increment as stInc, decrement as stDec, reset as stReset } from "../../features/counterSlice/CounterSlices";
import { useCounter } from '../../hooks/counter/useCounter';
import { Container } from '../../components/molecules/container/Container';
import { useCounterDispatch, useCounterSelector } from '../../hooks/store/storeHook';


const Counter = () => {
  const initialState = 0;
  const dispatch = useCounterDispatch()
  const value = useCounterSelector((state)=> state.value)
  const {count, decrement, increment, reset} = useCounter();
  return (
    <>
      <Container>
        <Title text="Click Counter" />
        <Button text="Add + 1" onClick={() => dispatch(stInc())} />
        <Button text="Sub - 1" onClick={() => dispatch(stDec())} />
        <Button text="Reset" onClick={() => dispatch(stReset())} />
        <Title text={value.toString()} />
      </Container>
      <Container>
        <Title text="Hook Counter" />
        <Button text="+1" onClick={() => increment(1)} />
        <Button text="-1" onClick={() => decrement(1)} />
        <Button text="reset" onClick={() => reset(initialState)} />
        <Title text={count.toString()} />
      </Container>  
    </>
  );
};

export default Counter;
