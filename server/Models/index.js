const axios = require('axios');

module.exports = {
  getAll: (endpoint) => {
    const options = {
      url: `https://vpic.nhtsa.dot.gov/${endpoint}`,
      method: 'get',
      headers: {
        'User-Agent': 'request',
      },
    };
    return axios(options);
  }
};