import { ReactNode } from "react";
import { IButtonProp, ITitleProps } from "./atoms-interfaces";
import { colors, style } from "./types";

export interface IButtonGroup {
    buttons: IButtonProp[];
    bgColor?: colors;
    style?: style;
}


export interface ICardContext {
    title: string;
    groupButton: IButtonGroup;
    text: string;
    footer?: ITitleProps;
}

export interface ICardProps {
    card:ICardContext;
    children?: ReactNode;
}