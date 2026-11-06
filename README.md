# Atelier Nova

Site vitrine Express en français avec trois pages : accueil, services et contact. Le site est accessible du lundi au vendredi, de 9 h à 17 h, selon l'heure locale de la machine qui exécute le serveur.

## Installation

```bash
npm install
```

## Démarrage

```bash
npm start
```

Ouvrez ensuite http://localhost:3000. Pour le mode développement avec redémarrage automatique, utilisez `npm run dev`.

## Tests

```bash
npm test
```

Les requêtes hors horaires reçoivent une page d'indisponibilité avec le statut HTTP 503.