import React, { useState } from "react";
import { Button } from "../../components/atoms/button/Button";
import { Title } from "../../components/atoms/title/Title";
import { useCounter } from '../../hooks/counter/useCounter';
import { Container } from '../../components/molecules/container/Container';

const Counter = () => {
  const initialState = 0;
  const [state, setState] = useState(initialState);
  const {count, decrement, increment, reset} = useCounter();
  return (
    <>
      <Container>
        <Title text="Click Counter" />
        <Button text="Add + 1" onClick={() => setState(state + 1)} />
        <Button text="Sub - 1" onClick={() => setState(state - 1)} />
        <Button text="Sub - 1" onClick={() => setState(0)} />
        <Title text={state.toString()} />
      </Container>
        <Title text="Hook Counter" />
        <Button text="Add + 1" onClick={() => increment(1)} />
        <Button text="Sub - 1" onClick={() => decrement(1)} />
        <Button text="Sub - 1" onClick={() => reset(initialState)} />
        <Title text={state.toString()} />
      <Container>
        
      </Container>  
    </>
  );
};

export default Counter;
