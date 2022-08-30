import React, { useState } from "react";
import { Button } from "../../components/atoms/button/Button";
import { Title } from "../../components/atoms/title/Title";
import { useCounter } from '../../hooks/counter/useCounter';
import { Container } from '../../components/molecules/container/Container';
import { CompounCard } from "../../components/molecules/compoundCard/CompounCard";
import { ICardContext } from "../../interfaces/molecules-interfaces";



const Counter = () => {
  const initialState = 0;
  const [state, setState] = useState(initialState);
  const {count, decrement, increment, reset} = useCounter();

  const cardContext:ICardContext = {
    title:'Counter cards',
    groupButton: {
         buttons: [
            {
                text:' + 1',
                onClick: ()=> setState(state + 1),
            },
            {
                text:' - 1',
                onClick: ()=> setState(state - 1),
            },
            {
                text:'Reset',
                onClick: ()=> setState(0),
            },

         ]
    },
    text:state.toString()
};


  return (
    <>
      {/* <Container>
        <Title text="Click Counter" />
        <Button text="Add + 1" onClick={() => setState(state + 1)} />
        <Button text="Sub - 1" onClick={() => setState(state - 1)} />
        <Button text="Sub - 1" onClick={() => setState(0)} />
        <Title text={state.toString()} />
      </Container> */}
      <CompounCard card={cardContext} />

      <Container>
        <Title text="Hook Counter" />
        <Button text="Add + 1" onClick={() => increment(1)} />
        <Button text="Sub - 1" onClick={() => decrement(1)} />
        <Button text="Sub - 1" onClick={() => reset(initialState)} />
        <Title text={count.toString()} />
      </Container>  
    </>
  );
};

export default Counter;
