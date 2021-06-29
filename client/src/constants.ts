const theHost = process.env.VUE_APP_SERVER_HOST
const thePort = process.env.VUE_APP_SERVER_PORT
const baseUrl: string = `${theHost}:${thePort}` || ''

// https://source.unsplash.com/{dimmension}/?{searchterm}
const baseUnsplashURL = 'https://source.unsplash.com/'

//For testing and illustrations
const productTypes = [
  'shirt',
  'dress',
  'shoes',
  'suit',
  'fashion',
  'training',
  'belt',
  'hat',
  'glasses',
  'sweater',
  'pants',
  'shoe',
]

export { baseUrl, baseUnsplashURL, productTypes }
