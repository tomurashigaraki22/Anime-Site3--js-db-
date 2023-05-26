const express = require("express");
const app = express();
const bcrypt = require('bcrypt'); // Importing bcrypt package
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('userxpass.db');

app.use(express.urlencoded({ extended: false }));

db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');

app.post("/signup", async (req, res) => {
  var name = req.body.username;
  var password = req.body.password;
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [name, password], (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Data entered successfully");
      res.redirect('/signin')
      db.close()
    }
  });
});

app.post("/signin", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
      if (err) {
        console.error(err);
        console.log(err);
      } else {
        if (row) {
          console.log("Username and password match: ", row);
          res.redirect('/home')
        } else {
          console.log('Username and password do not match');
          res.redirect('/signin')
        }
      }
    });
  });
  



app.get('/styles/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/styles/styles.css');
});

app.get('/styles/homestyle.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/styles/homestyle.css');
});

app.get('/styles/signstyle.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/styles/signstyle.css');
});

app.get('/styles/signstyles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/styles/signstyles.css');
});

app.get('/img/img1.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/img1.jpg');
});

app.get('/img/1.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/1.jpg');
});

app.get('/img/2.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/2.jpg');
});

app.get('/img/3.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/3.jpg');
});

app.get('/img/4.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/4.jpg');
});

app.get('/img/5.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/5.jpg');
});

app.get('/img/6.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/6.jpg');
});

app.get('/img/8.jpg', (req, res) => {
  res.setHeader('Content-Type', 'img/jpg');
  res.sendFile('C:/Users/Tomura Shigaraki/Desktop/Anime Site 2(js)' + '/img/8.jpg');
});

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/signin', (req, res) => {
    res.render("signin.ejs")
})

app.get('/signup', (req, res) => {
    res.render("signup.ejs")
})

app.get('/home', (req, res) => {
    res.render("home.ejs")
})


app.listen(3000)


