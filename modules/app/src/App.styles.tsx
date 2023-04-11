import { css } from '@linaria/core';

export const styles = {
  root: css`
    width: 50rem;
    margin: 20rem auto;
    padding: 4rem;
    background-color: var(--background-color-1);
    text-align: center;

    & > button{
      margin: 0.5rem;
    }
  `,
};
