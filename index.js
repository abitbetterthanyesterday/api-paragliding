'use strict'
require('dotenv').config()

const express = require('express')
const app = express()
const createError = require('http-errors')
const mongoose = require('mongoose')
const APIRouter = require('./routes/api')

//  Set up mongoose connection
const { DB_HOST, DB_PORT, DB_LOGIN, DB_PWD, DB_NAME } = process.env
mongoose.connect(`mongodb://${DB_LOGIN}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)
const db = mongoose.connection

// Error connection to DB
db.on('error', (err) => {
  console.log('DB not connected ', err)
})

// Success connection to DB.
db.once('open', () => {
  console.log('🎊 Hoora! You are connected to the database')
})

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000')
})

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/', APIRouter)

app.use(function (req, res, next) {
  next(createError (404))
})
