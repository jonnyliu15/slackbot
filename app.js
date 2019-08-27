'use strict'

const token = process.env.BOT_TOKEN
const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

let json = {}
axios.get('https://api.myjson.com/bins/ymuzr')
  .then(response => {
    json = response.data,
    console.log(json)
  })
  .catch(error => {
    console.log(error)
  })

app.post('/', function (req, res) {
  const body = req.body
  const { user_id } = body
  
  let name = ''
  axios.get('https://slack.com/api/users.info?token=' + token + '&user=' + user_id)
    .then(response => { 
        name = response.data.user.profile.first_name
    })
    .catch(error => {
        console.log(error)
    })
    .then(() => {
        res.set('Content-Type', 'text/plain')
        res.send(`Hello ` + name + ', here are some FAQs!')
        res.send()
    })
})

app.listen(8000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 8000')
})