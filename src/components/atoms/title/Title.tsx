import React from "react";
import { ITitleProps } from "../../../interfaces/atoms-interfaces";



export const Title = ({ text, fontSize }: ITitleProps) => {
  return <h1>{text}</h1>;
};
