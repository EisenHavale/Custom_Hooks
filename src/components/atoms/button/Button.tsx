import React from "react";
import { IButtonProp } from "../../../interfaces/atoms-interfaces";



export const Button = ({ text, disabled = false, onClick }: IButtonProp) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {" "}
      {text}
    </button>
  );
};
