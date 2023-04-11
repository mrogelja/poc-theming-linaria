import { css } from '@linaria/core';

export const styles = {
  root: css`
    --font-size: var(--font-size, 14px);
    --border-radius: 2px;
    --background-color: #496b76;
    --background-color-active: #7ea1ad;
    --color: white;

    font-size: var(--font-size);
    border: 1px solid #e9e9e9;
    border-radius: var(--border-radius);
    padding: 0.6em 1.2em;
    background-color: var(--background-color);
    color: var(--color);
    cursor: pointer;

    &:active{
      background-color: var(--background-color-active);
    }
  `,
  selected: css`
    --background-color: #c5edfb;
    --background-color-active: #93d4ea;
    --color: #496b76;
  `,
  disabled: css`
    --background-color: #e4e4e4;
    --color: #cbcbcb;
    cursor: initial;
    pointer-events: none;
  `,
  mini: css`
   --font-size: 12px;
  `,
};
