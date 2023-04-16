import { css, Theme } from '@poc/theme';

export const styles = {
  root: (theme: Theme) => css`
    width: 50rem;
    margin: 20rem auto;
    padding: 4rem;
    background-color: ${theme.backgroundColor.z1.asVar()};
    text-align: center;
    
    & > button{
      margin: 0.5rem;
    }
  `,
};
