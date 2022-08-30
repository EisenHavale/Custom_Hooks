import React, { useContext } from "react";
import { ITitleProps } from "../../../interfaces/atoms-interfaces";
import { CompoundCardContext } from '../../../app/card-context/CardContext';


export const Title = ({ text, fontSize }: ITitleProps) => {
  const { title } = useContext(CompoundCardContext);
  return <h1>{(text) ? text : (title)? title : 'No title' }</h1>;
};
