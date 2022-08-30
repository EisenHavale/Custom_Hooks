import React, { useContext } from 'react'
import { CompoundCardContext } from '../../../app/card-context/CardContext';
import { ICardProps } from '../../../interfaces/molecules-interfaces';
import { Title } from '../../atoms/title/Title';
import { Typography } from '../../atoms/typography/Typography';
import { ButtonGroup } from '../button-group/ButtonGroup';




export const CompounCard = ({ card, children }: ICardProps) => {

    return (
        <CompoundCardContext.Provider value={card}>
            <Title />
            <ButtonGroup />
            <Typography />
        </CompoundCardContext.Provider>
    )
}
