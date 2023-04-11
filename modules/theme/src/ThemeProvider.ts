import { Component, createContext } from 'react';
import { defaultTheme } from './defaultTheme';

export type ThemeProviderType<T> = React.ComponentType<{
  children: Component;
  theme?: T;
}>;

export const ThemeContext = createContext(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;
