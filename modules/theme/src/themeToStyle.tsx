import { CSSProperties } from "react";
import { CssVar, Theme } from "./Theme";
import { DeepPartial } from "./DeepPartial";

export function themeToStyle(theme?: DeepPartial<Theme>, style: CSSProperties = {}): CSSProperties {
  if (theme) {
    for (let prop of Object.values(theme)) {
      if (prop instanceof CssVar) {
        let cssProperty = prop.name;
        // @ts-ignore
        style[cssProperty] = prop.toString();
      } else if (typeof prop === "object") {
        style = themeToStyle(prop as DeepPartial<Theme>, style);
      }
    }
  }

  return style;
}
