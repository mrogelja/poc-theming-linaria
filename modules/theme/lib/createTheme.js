import mergeWith from 'lodash/mergeWith';
import { defaultTheme } from './defaultTheme';
import { CssVar } from './Theme';
export function createTheme(themeOverride) {
    return mergeWith({}, defaultTheme, themeOverride || {}, (source, target) => {
        if (source instanceof CssVar && target instanceof CssVar) {
            return target;
        }
    });
}
//# sourceMappingURL=createTheme.js.map