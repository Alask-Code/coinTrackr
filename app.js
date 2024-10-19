require('dotenv').config();

async function getCoinPrice (coin, currency, flags) {
  const options = {
    url: `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&community_data=false&developer_data=false`,
    method: 'GET',

    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': process.env.COINGECKO_API_KEY
    }
  };

  return await fetch(options.url, { ...options })
    .then(response => response.json());
}

async function app () {
  const flags = {
    localization: false,
    ticker: false,
    community_data: false,
    developer_data: false
  };
  const response = await getCoinPrice('ethereum', 'brl', flags);
  console.log(response);
}

app();
