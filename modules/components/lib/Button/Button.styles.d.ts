import { Theme, CssVar } from '@poc/theme';
export interface ButtonTheme extends Theme {
    borderRadius: CssVar;
}
export declare const styles: {
    root: (theme: ButtonTheme) => import("@emotion/react").SerializedStyles;
    selected: import("@emotion/react").SerializedStyles;
    disabled: (theme: ButtonTheme) => import("@emotion/react").SerializedStyles;
    mini: import("@emotion/react").SerializedStyles;
};
