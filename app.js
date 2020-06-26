const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const flash = require('connect-flash')

const routes = require('./routes')

const userPassport = require('./config/passport.js')

const db = require('./models')
const Todo = db.Todo
const User = db.User

const app = express()
const PORT = 3000


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

userPassport(app)

app.use(flash())
app.use((req, res, next) => {
  console.log('req body', req.body)
  console.log('req user', req.user)
  console.log('req session', req.session)

  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')

  next()
})

app.use(routes)


app.listen(PORT, (req, res) => {
  console.log(`App up and running on http://localhost:${PORT}`)
})