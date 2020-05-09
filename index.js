'use strict'
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const APIRouter = require('./routes/api')
var cloudinary = require('cloudinary').v2

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

// Set up cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
})

// test cloudinary
const test = false

if (test) {
  cloudinary.uploader.upload('./blasonBugey.jpg', function (error, result) { console.log(result, error) })
}

// CLOUDINARY_URL=cloudinary://CLOUDINARY_API_KEY:CLOUDINARY_SECRET_KEY@CLOUDINARY_CLOUD_NAME

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/', APIRouter)

// app.use(function (req, res, next) {
//   next(createError (404))
// })
