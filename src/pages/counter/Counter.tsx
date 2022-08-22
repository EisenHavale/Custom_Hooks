import React, { useState } from "react";
import { Container } from "../../components/molecules/container/Container";
import { Button } from "../../components/atoms/button/Button";
import { Title } from "../../components/atoms/title/Title";

export const Counter = () => {
  const [state, setState] = useState(0);
  return (
    <Container>
      <Title text="Click Counter" />
      <Button text="Add + 1" onClick={() => setState(state + 1)} />
      <Button text="Sub - 1" onClick={() => setState(state - 1)} />
      <Title text={state.toString()} />
    </Container>
  );
};
