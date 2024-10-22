const { API_ENDPOINT, COINGECKO_API_KEY } = process.env;

module.exports = async function fetchCoinPrice (id, {
  localization = Boolean, tickers = Boolean,
  communityData = Boolean, developerData = Boolean
}) {
  return await fetch(`${API_ENDPOINT}/coins/${id}?localization=${localization}&tickers=${tickers}&community_data=${communityData}&developer_data=${developerData}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': COINGECKO_API_KEY
    }
  })
    .then(response => response.json());
};
