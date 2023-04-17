export interface CssVar<T = string> {
    value: T;
    name: string;
}
export interface Theme {
    backgroundColor: {
        z0: CssVar;
        z1: CssVar;
        z2: CssVar;
    };
    color: {
        primary: CssVar;
        primaryText: CssVar;
        active: CssVar;
        activeText: CssVar;
        disabled: CssVar;
        disabledText: CssVar;
    };
    typography: {
        fontSize: CssVar<number>;
    };
}
export declare const theme: Theme;
