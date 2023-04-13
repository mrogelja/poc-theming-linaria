import { injectTheme } from '@poc/theme';
import { Button } from '@poc/components';
import { styles } from './App.styles';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    injectTheme();
  }, []);

  return (
    <div className={styles.root}>
      <Button>Bouton normal</Button>
      <Button disabled>Bouton désactivé</Button>
      <Button selected>Bouton sélectionné</Button>
      <Button size="mini" selected>
        Petit bouton sélectionné
      </Button>
      <Button style={{ '--button-font-size': '22px', '--button-background-color': 'red' } as React.CSSProperties}>
        Bouton custom
      </Button>
    </div>
  );
}

export default App;
