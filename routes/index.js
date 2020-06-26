const express = require('express')
const router = express.Router()

const home = require('./modules/home.js')
const todo = require('./modules/todo.js')
const user = require('./modules/user.js')

const { authenticator } = require('../middleware/auth.js')


router.use('/todos', authenticator, todo)
router.use('/users', user)
router.use('/', authenticator, home)

module.exports = router