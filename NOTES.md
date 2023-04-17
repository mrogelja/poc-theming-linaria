## Avantages par rapport à CSS-Modules :

@emotion/css et @emotion/react

- Possibilité de nesting et simplicité de composition de CSS (pas besoin de !important)
- Possibilité de lier des variables JS à des variables CSS
- Pas de CSS compilé, généré au runtime donc facile à exporter dans la lib.
- Sourcemap généré
- Plus facile à tester par snapshot (@emotion/jest)

@emotion/react seul

- (Normalement) possibilité de typechecker si utilisation de la version objet css({ ... }).
- Possibilité d'utiliser un ThemeProvider pour dynamiser proprement la génération de CSS et typechecker la surcharge des composants

## Inconvénients:

@emotion/css et @emotion/react

- Obligation de mettre @emotion/css en peerDependencies (!!)
- Overhead généré dû à la compilation du CSS au runtime (Surcouche JS générant le CSS)
- Ecriture du CSS embeddé dans des css`...` augmente la difficulté la lecture du code.

@emotion/react seul

- Dans version @emotion/react, l'utilisation des propriétés css={} rajoute un niveau de spécialisation (plus dur de revenir en arrière si on veut revenir à du css natif)
- Si typechecking si utilisation de la version objet css({ ... }), éloignement de l'écriture de CSS natif donc courbe d'apprentissage augmentée.
