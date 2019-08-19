'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', function (req, res) {
  const body = req.body
  const { user_name } = body;


  res.set('Content-Type', 'text/plain')
  res.send(`Hello ` + user_name + ', here are some FAQs!')
  res.send(faqText)
})

app.listen(8000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 8000')
})