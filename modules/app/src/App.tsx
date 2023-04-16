import { CssVar, Theme, createTheme, injectTheme } from '@poc/theme';
import { Button } from '@poc/components';
import { styles } from './App.styles';
import { useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";

function App() {
  const [theme, setTheme] = useState<Theme>(createTheme());

  useEffect(() => {
    injectTheme(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <Button>Bouton normal</Button>
        <Button disabled>Bouton désactivé</Button>
        <Button selected>Bouton sélectionné</Button>
        <Button size="mini" selected>
          Petit bouton sélectionné
        </Button>
        <Button theme={{
          typography: {
            fontSize: theme.typography.fontSize.clone(22)
          },
          color: {
            primary: theme.color.primary.clone("red")
          }
        }}>
          Bouton custom
        </Button>

        <Button onClick={themeChangeHandler}>
          Changer de Thème !
        </Button>
      </div>
    </ThemeProvider>
  );

  function themeChangeHandler() {
    let z0 = theme.backgroundColor.z0;
    z0.value = "red";

    let newTheme = createTheme({
      backgroundColor: {
        z0: theme.backgroundColor.z0.clone("red")
      }
    });

    setTheme(newTheme)
  }
}

export default App;