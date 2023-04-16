import { MouseEvent } from "react";
import { styles, ButtonTheme } from './Button.styles';
import { CssVar, Theme } from "@poc/theme";

type ButtonSize = 'mini' | 'normal' | 'big';

interface ButtonProps {
  size?: ButtonSize;
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  theme?: Partial<ButtonTheme>;
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

  const style = convertThemeToStyle(theme);
  
  console.log(style);

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


function convertThemeToStyle(theme?: Partial<ButtonTheme>, style : object = {}) : object{
  if (theme) {
    for (let prop of Object.values(theme)) {
      if (typeof prop === "object") {
        return convertThemeToStyle(prop as Partial<ButtonTheme>, style);
      } else if (prop instanceof CssVar) {
        style[prop.name] = prop.value;
      }
    }
  }
  return style;
}

