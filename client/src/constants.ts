const theHost = process.env.VUE_APP_SERVER_HOST
const thePort = process.env.VUE_APP_SERVER_PORT
const baseUrl: string = `${theHost}:${thePort}` || ''

export { baseUrl }
