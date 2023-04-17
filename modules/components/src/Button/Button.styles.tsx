import { Theme, CssVar} from '@poc/theme';
import { css } from "@emotion/react";

export interface ButtonTheme extends Theme {
  borderRadius: CssVar;
}

export const styles = {
  root: (theme: ButtonTheme) => css`
    --button-font-size: ${theme.typography.fontSize.asVar('14px')};
    --button-background-color:  ${theme.color.primary.asVar("#496b76")};
    --button-background-color-active: ${theme.color.active.asVar("#7ea1ad")};
    --button-color: ${theme.color.primaryText.asVar("#FFFFF")}; 
    --button-color-active: ${theme.color.activeText.asVar("#FFFFF")};
    --button-border-radius: ${theme.borderRadius?.asVar() || "2px"};

    font-size: var(--button-font-size);
    border: 1px solid #e9e9e9;
    border-radius: var(--button-border-radius);
    padding: 0.6em 1.2em;
    background-color: var(--button-background-color);
    color: var(--button-color);
    cursor: pointer;

    &:active{
      background-color: var(--button-background-color-active);
      color: var(--button-color-active);
    }
  `,
  selected: css`
    &, &:active{
      --button-background-color: var(--button-background-color-active);
      --button-color: var(--button-color-active);
    }
  `,
  // disabled: (theme: ButtonTheme) => {
  //   return css`
  //   --button-background-color: ${theme.color.disabled.asVar("#e4e4e4")};
  //   --button-color: ${theme.color.disabledText.asVar("#cbcbcb")};
  //   cursor: initial;
  //   pointer-events: none;
  // `;
  // },
  disabled: (theme: ButtonTheme) => ({
    "--button-background-color": theme.color.disabled.asVar("#e4e4e4"),
    "--button-color": theme.color.disabledText.asVar("#cbcbcb"),
    cursor: "pointer",
    pointerEvents: "none",
  }),
  mini: css`
    --button-font-size: 12px;
  `,
};