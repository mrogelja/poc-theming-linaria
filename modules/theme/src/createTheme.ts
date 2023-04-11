import { Theme } from './Theme';
import * as deepmerge from 'deepmerge';
import { defaultTheme } from './defaultTheme';

export function createTheme(theme?: Theme) {
  return deepmerge(defaultTheme, theme || {});
}

export function getCssVariablesFromTheme(theme: Theme){
  Object.entries(theme).reduce(() => {

  }, [])
}


export function injectTheme(theme: Theme) {
  let sheet = document.getElementById('css-theme');

  if (!sheet) {
    sheet = document.createElement('style');
    sheet.setAttribute('id', 'css-theme');
    document.head.appendChild(sheet);
  }

  sheet.innerHTML = `
    :root{
      --background-color-0: ${theme.background.color[0]};
      --background-color-1: ${theme.background.color[1]};
      --background-color-2: ${theme.background.color[2]};

      --color-primary: ${theme.color.primary};
      --color-secondary: ${theme.color.secondary};
      --text-color-primary: ${theme.color.primaryText};      
      --text-color-secondary: ${theme.color.secondaryText};

      --font-size: ${theme.typography.fontSize};

      font-size: var(--font-size);
      background-color: var(--background-color-0);
    }
  `;
}
