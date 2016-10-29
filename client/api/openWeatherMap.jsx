import axios from 'axios'

const APPID = '7aa6d85b33f5bc0c5228281f6bbc4204'
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APPID}&units=metric&lang=ru`

export function getTemp(location) {
  let encodedLocation = encodeURIComponent(location)
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

  return axios.get(requestUrl).then(function (res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    } else {
      return Math.round(res.data.main.temp)
    }
  }).catch(function (err) {
    throw new Error(err.message)
  })
}
