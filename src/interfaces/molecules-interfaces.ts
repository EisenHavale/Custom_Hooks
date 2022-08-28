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
    footer: ITitleProps;
}

export interface ICardProps {d
    card:ICardContext;
    children: ReactNode;
}