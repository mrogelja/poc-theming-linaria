import { CssVar } from "./Theme";
export function themeToStyle(theme, style = {}) {
    if (theme) {
        for (let prop of Object.values(theme)) {
            if (prop instanceof CssVar) {
                let cssProperty = prop.name;
                // @ts-ignore
                style[cssProperty] = prop.toString();
            }
            else if (typeof prop === "object") {
                style = themeToStyle(prop, style);
            }
        }
    }
    return style;
}
//# sourceMappingURL=themeToStyle.js.map