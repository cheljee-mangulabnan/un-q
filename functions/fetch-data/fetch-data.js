const axios = require('axios')
const handler = async (event) => {
  const { query } = event.queryStringParameters

  const apiKey = process.env.REACT_APP_API_KEY
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&${apiKey}`

  try {
    const { data } = await axios.get(url)

    return {
      header: {
        'Content-Type': 'application/json',
      },
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
