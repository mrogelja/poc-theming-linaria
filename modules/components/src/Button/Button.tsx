import { MouseEvent } from "react";
import { styles, ButtonTheme } from './Button.styles';
import { themeToStyle } from "@poc/theme";

type ButtonSize = 'mini' | 'normal' | 'big';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

interface ButtonProps {
  size?: ButtonSize;
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  theme?: DeepPartial<ButtonTheme>;
  onClick?: Function
}


export function Button({
  disabled = false,
  selected = false,
  size = 'normal',
  theme,
  children,
  onClick
}: ButtonProps): JSX.Element {

  const style = themeToStyle(theme);

  style && console.log(style);
  return (
    <button
      type="button"
      css={[
        styles.root,
        disabled && styles.disabled,
        selected && styles.selected,
        size === 'mini' && styles.mini
      ]}
      disabled={disabled}
      style={style}
      onClick={clickHandler}
    >
      {children}
    </button>
  );

  function clickHandler(e: MouseEvent) {
    if (!disabled) {
      onClick?.(e);
    }
  }
}



