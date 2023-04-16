import { Theme as EmotionTheme } from '@emotion/react';
export declare class CssVar<T = string> {
    name: string;
    value: T;
    constructor(name: string, value: T);
    asVar(): string;
    asRule(): string;
}
export interface Theme extends EmotionTheme {
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
