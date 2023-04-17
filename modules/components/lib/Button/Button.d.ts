/// <reference types="react" />
import { ButtonTheme } from './Button.styles';
import { DeepPartial } from "@poc/theme";
type ButtonSize = 'mini' | 'normal' | 'big';
interface ButtonProps {
    size?: ButtonSize;
    selected?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    theme?: DeepPartial<ButtonTheme>;
    onClick?: Function;
}
export declare function Button({ disabled, selected, size, theme, children, onClick }: ButtonProps): JSX.Element;
export {};
