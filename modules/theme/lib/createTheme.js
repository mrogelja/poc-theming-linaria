import mergeWith from 'lodash/mergeWith';
import { defaultTheme } from './defaultTheme';
import { CssVar } from './Theme';
export function createTheme(themeOverride) {
    return mergeWith(defaultTheme, themeOverride || {}, (objValue, srcValue) => {
        if (srcValue instanceof CssVar) {
            return srcValue;
        }
    });
}
//# sourceMappingURL=createTheme.js.map