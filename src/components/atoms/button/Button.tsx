import React from "react";

interface IButtonProp {
  text: string;
  disabled?: boolean;
  icon?: string;
  onClick: () => void;
}

export const Button = ({ text, disabled = false, onClick }: IButtonProp) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {" "}
      {text}
    </button>
  );
};
