const express = require('express');
const path = require('node:path');
const { isWithinWorkingHours, workingHoursMiddleware } = require('./src/middleware/working-hours');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(workingHoursMiddleware());

app.get('/', (req, res) => {
  res.render('home', { title: 'Accueil | Atelier Nova', page: 'home' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Nos services | Atelier Nova', page: 'services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contactez-nous | Atelier Nova', page: 'contact' });
});

app.use((req, res) => {
  res.status(404).render('not-found', { title: 'Page introuvable | Atelier Nova', page: '' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Atelier Nova est disponible sur http://localhost:${port}`);
  });
}

module.exports = { app, isWithinWorkingHours };