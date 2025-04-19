// Auth


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { res.send('Hello world AUTH') })

// config

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




//

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



app.post('/login', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  authenticate(req.body.username, req.body.password, function (err, user) {
    if (err) return next(err)
    if (user) {
      req.session.regenerate(function () {
        req.session.user = user;
        req.session.success = 'Authenticated as ' + user.name
          + ' click to <a href="/logout">logout</a>. '
          + ' You may now access <a href="/restricted">/restricted</a>.';
        res.redirect(req.get('Referrer') || '/');
      });
    } else {
      req.session.error = 'Authentication failed, please check your '
        + ' username and password.'
        + ' (use "tj" and "foobar")';
      res.redirect('/login');
    }
  });
});