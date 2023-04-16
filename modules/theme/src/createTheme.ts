import mergeWith from 'lodash/mergeWith';
import { Theme } from '@emotion/react';
import { defaultTheme } from './defaultTheme';
import { CssVar } from './Theme';


export function createTheme(themeOverride?: Partial<Theme>): Theme {
  return mergeWith({ ...defaultTheme }, themeOverride || {}, (objValue, srcValue) => {
    if (srcValue instanceof CssVar) {
      return srcValue;
    }
  });
}
