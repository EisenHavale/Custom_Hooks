export interface IButtonProp {
    text: string;
    disabled?: boolean;
    icon?: string;
    onClick?: () => void;
}

export interface ITitleProps {
    text?: string;
    fontSize?: "small" | "medium" | "large";
}