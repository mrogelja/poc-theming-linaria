import { MouseEvent } from "react";
import { styles, ButtonTheme } from './Button.styles';
import { themeToStyle, DeepPartial } from "@poc/theme";

type ButtonSize = 'mini' | 'normal' | 'big';

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



