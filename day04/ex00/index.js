const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()

app.use(cookieParser())
app.use(session({secret: "so secret",
                  saveUninitialized: true,
                  resave: false}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let sess = {}

app.get('/', (req, res) => {
  let login = ''
  let passwd = ''
  if (req.cookies  && req.cookies.sessid && sess[req.cookies.sessid]) {
    login = sess[req.cookies.sessid].login
    passwd = sess[req.cookies.sessid].passwd
  }
  else if (req.query.submit == "OK" && req.query.login && req.query.passwd) {
    sess[req.sessionID] = {}
    sess[req.sessionID].login = req.query.login
    sess[req.sessionID].passwd = req.query.passwd
    login = req.query.login
    passwd = req.query.passwd
    res.cookie('sessid', req.sessionID)
  }
  else {
    res.cookie('sessid', req.sessionID)
  }
  res.send(`<html>
    <body>
      <form action="index.js">
        Username: <input type="text" name="login" value="${login}" />
        <br />
        Password: <input type="text" name="passwd" value="${passwd}" />
        <input type="submit" name="submit" value="OK" />
      </form>
    </body>
  </html>`)
})

app.listen(8100)
