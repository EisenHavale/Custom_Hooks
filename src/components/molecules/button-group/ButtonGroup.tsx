import React, {useContext } from 'react';
import { IButtonGroup } from '../../../interfaces/molecules-interfaces';
import { Button } from '../../atoms/button/Button';
import { Container } from '../container/Container';
import { CompoundCardContext } from '../../../app/card-context/CardContext';

export const ButtonGroup = () => {
  const {groupButton} = useContext(CompoundCardContext);
  const {buttons} = groupButton;
  return (
    <>
      {(groupButton) ? <Container>
        {buttons.map(button => {
          return <Button text={button.text} onClick={button.onClick} />;
        })}
      </Container>
      : <></> }
    </>
  )
}
