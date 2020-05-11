const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const cloudinary = require('cloudinary').v2
const morgan = require('morgan')

module.exports = { mongoose, passport, session, cloudinary, morgan }