/*
 Designed and developed by Hoang Bao Ngo
*/

require('dotenv').config({ silent: process.env.NODE_ENV !== 'development' })

const express = require('express')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const cors = require('cors')
const path = require('path')
const apiRoutes = require('./api')

const app = express()
app.locals.pretty = true
const dirname = process.cwd() + '/server'

// Send the whole build folder to the user or anyone connected to the server
app.use(express.static(path.join(dirname, '../client/www')))
app.use(express.json())

// We encounter CORS issues if the server is serving the webpage locally
// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    const allowedOrigins = [
      `${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
    ]
    const host = `${req.protocol}://${req.get('Host')}`
    const i = allowedOrigins.indexOf(host)
    let origin = req.headers.Origin || req.headers.origin
    if (i > -1 && typeof origin === 'undefined') {
      origin = allowedOrigins[i]
    }
    // add details of what is allowed in HTTP request headers to the response headers
    res.header('Access-Control-Allow-Origin', origin)
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, PUT, DELETE, OPTIONS'
    )
    res.header('Access-Control-Max-Age', '86400')
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS, PATCH'
    )
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, X-Requested-With, X-HTTP-Method-Override, Accept, Authorization, upload-offset'
    )
    res.header('Access-Control-Allow-Credentials', true)
    return next()
  })
}
app.use(cors({ credentials: true, origin: process.env.VUE_APP_SERVER_HOST }))

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  store: new MemoryStore({
    checkPeriod: 86400000, // prune expired entries every 24h
  }),
  rolling: true,
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 86400000 },
}

// Start a secure server
app.set('trust proxy', 1) // trust first proxy
sessionOptions.proxy = true
sessionOptions.cookie.secure = true // serve secure cookies
app.use(session(sessionOptions))

// Redirect http calls to https
app.use((req, res, next) => {
  if (!req.secure) {
    const redirect = `https://${req.headers.host}${req.url}`
    return res.redirect(redirect)
  }
  return next()
})

/* API's */
app.use('/api', apiRoutes)

// Error handling
function logErrors(err, req, res, next) {
  console.error(err.stack)
  next(err)
}

app.use(logErrors)

module.exports = app
