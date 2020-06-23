const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
// const routes = require('./routes')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users/login', (req, res) => {
  res.send('login')
})

app.post('users/login', (req, res) => {
  res.send('login')
})

app.get('/users/register', (req, res) => {
  res.send('register')
})

app.post('/users/register', (reqr, res) => {
  res.send('register')
})

app.get('/users/logout', (req, res) => {
  res.send('logout')
})



app.listen(PORT, (req, res) => {
  console.log(`App up and running on http://localhost:${PORT}`)
})