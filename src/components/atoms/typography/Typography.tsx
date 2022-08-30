import React, {useContext} from 'react'
import { CompoundCardContext } from '../../../app/card-context/CardContext';

export const Typography = () => {
    const {text} = useContext(CompoundCardContext);
  return (
    <h1>{text}</h1>
  )
}
