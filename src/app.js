require('dotenv').config();

async function init () {
  const { fetchCoinPrice, defaultFlags: flags } = require('./scripts/fetchCoinPrice');
  const { updateElements } = require('./scripts/updateElements');
  const cryptoData = await fetchCoinPrice('bitcoin', flags);
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
