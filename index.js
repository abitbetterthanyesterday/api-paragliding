'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

//  Set up mongoose connection
const mongoose = require('mongoose')

const { DB_HOST, DB_PORT, DB_LOGIN, DB_PWD, DB_NAME } = process.env

mongoose.connect(`mongodb://${DB_LOGIN}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log('🎊 You are connected to the database')
  }
})

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000')
})
