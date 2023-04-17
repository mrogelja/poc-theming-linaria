import { Theme, createTheme, injectTheme } from '@poc/theme';
import { Button } from '@poc/components';
import { styles } from './App.styles';
import { useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";

const defaultTheme: Theme = createTheme();
const lightTheme: Theme   = createTheme({
  backgroundColor: {
    z0: defaultTheme.backgroundColor.z0.copy("red")
  }
});


function App() {
  const [themeLight, setThemeLight] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    setTheme(themeLight ? lightTheme : defaultTheme)
  }, [themeLight]);
  
  useEffect(() => {
    injectTheme(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <div css={styles.moveTheme}>
          <a onClick={themeChangeHandler}>
            {themeLight ? "Thème moche" : "Thème par défaut"}
          </a>
        </div>
        <Button>Bouton normal</Button>
        <Button disabled>Bouton désactivé</Button>
        <Button selected>Bouton sélectionné</Button>
        <Button size="mini" selected>
          Petit bouton sélectionné
        </Button>
        <Button theme={{
          typography: {
            fontSize: theme.typography.fontSize.copy(22)
          },
          color: {
            primary: theme.color.primary.copy("red")
          }
        }}>
          Bouton custom
        </Button>
      </div>
    </ThemeProvider>
  );

  function themeChangeHandler() {
    setThemeLight(!themeLight);
  }
}

export default App;