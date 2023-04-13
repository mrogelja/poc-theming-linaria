/// <reference types="react" />
type ButtonSize = 'mini' | 'normal' | 'big';
interface ButtonProps {
    size?: ButtonSize;
    selected?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export declare function Button({ disabled, selected, size, style, children, }: ButtonProps): JSX.Element;
export {};
