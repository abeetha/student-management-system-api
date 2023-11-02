const express = require('express')
var path = require('path')

var bodyParser = require('body-parser')

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

const login = require('./routes/login-route')
const list = require('./routes/list-route')

app.use('/api/login', login)
app.use('/api/list', list)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})