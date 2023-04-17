import { CSSProperties } from "react";
import { CssVar, Theme } from "./Theme";

export function themeToStyle(theme?: Partial<Theme>, style: CSSProperties = {}): CSSProperties {
  if (theme) {
    for (let prop of Object.values(theme)) {
      if (prop instanceof CssVar) {
        let cssProperty = prop.name;
        // @ts-ignore
        style[cssProperty] = prop.toString();
      } else if (typeof prop === "object") {
        style = themeToStyle(prop as Partial<Theme>, style);
      }
    }
  }

  return style;
}
