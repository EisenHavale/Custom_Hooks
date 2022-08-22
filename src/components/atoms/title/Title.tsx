import React from "react";

interface ITitleProps {
  text: string;
  fontSize?: "small" | "medium" | "large";
}

export const Title = ({ text, fontSize }: ITitleProps) => {
  return <h1>{text}</h1>;
};
