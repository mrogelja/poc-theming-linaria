import { css } from '@emotion/css';
import { theme } from '@poc/theme';

export const styles = {
  root: css`
    width: 50rem;
    margin: 20rem auto;
    padding: 4rem;
    background-color: var(${theme.backgroundColor.z1.name});
    text-align: center;
    
    & > button{
      margin: 0.5rem;
    }
  `,
};
