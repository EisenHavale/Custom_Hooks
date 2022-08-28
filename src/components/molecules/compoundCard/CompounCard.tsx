import React, { useContext} from 'react'
import { CompoundCardContext } from '../../../app/card-context/CardContext';
import { ICardProps } from '../../../interfaces/molecules-interfaces';




export const CompounCard = ({card, children}:ICardProps) => {
    
  return (
    <CompoundCardContext.Provider value={card}>
        {children}
    </CompoundCardContext.Provider>
  )
}
