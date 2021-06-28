/*
 Designed and developed by Hoang Bao Ngo
*/
const http = require('https')
const app = require('./app')
const port = process.env.VUE_APP_SERVER_PORT

function startServerCallback() {
  console.log(
    `Your server is listening at ${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`
  )
}

http.createServer(app).listen(port, startServerCallback)
