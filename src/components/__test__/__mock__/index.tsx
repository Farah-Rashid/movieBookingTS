import { apiUrl } from '../../../GlobalConstants'
const axios = require('axios');

async function getMovieData() {
  const response = await axios.get(apiUrl);
  return response.data
}
module.exports = getMovieData;