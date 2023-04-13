import { styles } from './Button.styles';

type ButtonSize = 'mini' | 'normal' | 'big';

interface ButtonProps {
  size?: ButtonSize;
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button({
  disabled = false,
  selected = false,
  size = 'normal',
  style,
  children,
}: ButtonProps): JSX.Element {
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
    >
      {children}
    </button>
  );
}
