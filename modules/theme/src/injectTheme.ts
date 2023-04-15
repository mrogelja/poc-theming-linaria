import { Theme, theme as defaultTheme } from './Theme';
import deepmerge from 'deepmerge';

export function injectTheme(themeOverride?: Partial<Theme>) {
  const theme = deepmerge(defaultTheme, themeOverride || {});
  
  let sheet = document.getElementById('css-theme');
  
  if (!sheet) {
    sheet = document.createElement('style');
    sheet.setAttribute('id', 'css-theme');
    document.head.appendChild(sheet);
  }

  // TODO: Generate automatically the :root part
  sheet.innerHTML = `
    :root{
      ${theme.typography.fontSize.name}: ${theme.typography.fontSize.value};
      ${theme.backgroundColor.z0.name}: ${theme.backgroundColor.z0.value};
      ${theme.backgroundColor.z1.name}: ${theme.backgroundColor.z1.value};
      ${theme.backgroundColor.z2.name}: ${theme.backgroundColor.z2.value};
      ${theme.color.primary.name}: ${theme.color.primary.value};
      ${theme.color.primaryText.name}: ${theme.color.primaryText.value};      
      ${theme.color.active.name}: ${theme.color.active.value};
      ${theme.color.activeText.name}: ${theme.color.activeText.value};      
      ${theme.color.disabled.name}: ${theme.color.disabled.value};      
      ${theme.color.disabledText.name}: ${theme.color.disabledText.value};       
    }


    html{
      font-size: var(${theme.typography.fontSize.name});
      background-color: var(${theme.backgroundColor.z0.name});
    }
  `;
}
