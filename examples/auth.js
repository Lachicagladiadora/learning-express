// Auth


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { res.send('Hello world AUTH') })

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/restricted', (req, res) => {
  res.send('You do not have an account yet. Create an account');
});

app.get('/logout', (req, res) => {
  req.session.destroy('/login', () => {
    res.redirect('/')
  });
});

app.get('/login', (req, res) => {
  res.render('login, Plus Ultra');
});

app.listen(port, () => { console.log(`I'm listening on port ${port} 🪼`) })
