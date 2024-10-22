require('dotenv').config();
const flags = {
  localization: false,
  tickers: false,
  communityData: false,
  developerData: false
};
async function init () {
  const fetchCoinPrice = require('./api/fetchCripto');
  const { updateElements } = require('./scripts/updateElements');
  const cryptoData = await fetchCoinPrice('ethereum', flags);
  console.log(cryptoData);
  const timestamp = new Date(cryptoData.last_updated);
  updateElements(cryptoData, timestamp, 'usd');
}

async function App () {
  init();
  setInterval(async () => {
    init();
  }, 1000 * 55);
}

App();
