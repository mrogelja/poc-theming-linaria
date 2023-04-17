import { css, Theme } from '@poc/theme';

export const styles = {
  root: (theme: Theme) => css`
    position: relative;
    width: 50rem;
    margin: 20rem auto;
    padding: 4rem;
    background-color: ${theme.backgroundColor.z1.asVar()};
    text-align: center;
    
    & > button{
      margin: 0.5rem;
    }
  `,
  moveTheme: (theme: Theme) => css`
    position: absolute;
    top: 1rem;
    right: 1rem;

    & > a {
      color: ${theme.color.primaryText.asVar()};
      text-decoration: underline;
      cursor: pointer;
    }
  `
};
