import { CssVar } from './Theme';
export const defaultTheme = {
    backgroundColor: {
        z0: new CssVar("--background-color-z0", "#2C444C"),
        z1: new CssVar("--background-color-z1", "#243C44"),
        z2: new CssVar("--background-color-z2", "#1C343B"),
    },
    color: {
        primary: new CssVar("--color-primary", "#496b76"),
        primaryText: new CssVar("--color-primary-text", "white"),
        active: new CssVar("--color-active", "#c5edfb"),
        activeText: new CssVar("--color-active-text", "#496b76"),
        disabled: new CssVar("--color-disabled", "#e4e4e4"),
        disabledText: new CssVar("--color-disabled-text", "#cbcbcb"),
    },
    typography: {
        fontSize: new CssVar("--font-size", 12),
    },
};
//# sourceMappingURL=defaultTheme.js.map