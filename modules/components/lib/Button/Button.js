import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { styles } from './Button.styles';
export function Button({ disabled = false, selected = false, size = 'normal', style, children, }) {
    return (_jsx("button", { type: "button", css: [
            styles.root,
            disabled && styles.disabled,
            selected && styles.selected,
            size === 'mini' && styles.mini
        ], disabled: disabled, style: style, children: children }));
}
//# sourceMappingURL=Button.js.map