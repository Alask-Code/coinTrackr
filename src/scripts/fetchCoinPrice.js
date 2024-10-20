async function fetchCoinPrice (coin, params) {
  return await fetch(`${process.env.API_ENDPOINT}/coins/${coin}?localization=${params.localization}&tickers=${params.tickers}&community_data=${params.communityData}&developer_data=${params.developerData}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': process.env.COINGECKO_API_KEY
    }
  })
    .then(response => response.json());
}

module.exports = {
  fetchCoinPrice,
  defaultFlags: {
    localization: false,
    tickers: false,
    communityData: false,
    developerData: false
  }
};
