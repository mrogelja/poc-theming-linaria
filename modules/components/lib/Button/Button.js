import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { styles } from './Button.styles';
import { themeToStyle } from "@poc/theme";
export function Button({ disabled = false, selected = false, size = 'normal', theme, children, onClick }) {
    const style = themeToStyle(theme);
    return (_jsx("button", { type: "button", css: [
            styles.root,
            disabled && styles.disabled,
            selected && styles.selected,
            size === 'mini' && styles.mini
        ], disabled: disabled, style: style, onClick: clickHandler, children: children }));
    function clickHandler(e) {
        if (!disabled) {
            onClick?.(e);
        }
    }
}
//# sourceMappingURL=Button.js.map