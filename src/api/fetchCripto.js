const { API_ENDPOINT, COINGECKO_API_KEY } = process.env;

module.exports = async function fetchCoinPrice (id) {
  return await fetch(`${API_ENDPOINT}/coins/${id}?localization=false&tickers=false&community_data=false`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': COINGECKO_API_KEY
    }
  })
    .then(response => response.json());
};
