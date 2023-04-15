import { css } from '@emotion/react';
import { theme } from '@poc/theme';

export const styles = {
  root: css`
    --button-font-size: var(${theme.typography.fontSize.name}, 14px);
    --button-border-radius: 2px;
    --button-background-color: var(${theme.color.primary.name}, #496b76);
    --button-background-color-active: var(${theme.color.active.name}, #7ea1ad);
    --button-color: var(${theme.color.primaryText.name}, #FFFFF);
    --button-color-active: var(${theme.color.activeText.name}, #FFFFF);

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
  disabled: css`
    --button-background-color: var(${theme.color.disabled.name}, #e4e4e4);
    --button-color: var(${theme.color.disabledText.name}, #cbcbcb);
    cursor: initial;
    pointer-events: none;
  `,
  mini: css`
    --button-font-size: 12px;
  `,
};