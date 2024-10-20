async function fetchCoinPrice (coin, currency, {
  localization = Boolean,
  ticker: tickers = Boolean,
  communityData = Boolean,
  developerData = Boolean
}) {
  return await fetch(`${process.env.API_ENDPOINT}/coins/${coin}?localization=${localization}&tickers=${tickers}&community_data=${communityData}&developer_data=${developerData}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': process.env.COINGECKO_API_KEY
    }
  })
    .then(response => response.json());
}

const defaultFlags = {
  localization: false,
  ticker: false,
  communityData: false,
  developerData: false
};

module.exports = {
  fetchCoinPrice,
  defaultFlags
};
