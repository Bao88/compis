/* Products API's */

const router = require('express').Router()

router.get('/products', (request, response) => {
  console.log(request.body)
  response.send('You succeded!')
})

router.post('/product', (request, response) => {
  console.log(request.body)
  response.send('You succeded!')
})

module.exports = router
