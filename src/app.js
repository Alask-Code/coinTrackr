require('dotenv').config();

async function init () {
  const { fetchCoinPrice, defaultFlags: flags } = require('./scripts/fetchCoinPrice');
  const { updateElements } = require('./scripts/updateElements');
  const btcData = await fetchCoinPrice('solana', 'brl', flags);
  const timestamp = new Date(btcData.last_updated);
  updateElements(btcData, timestamp);
}

async function App () {
  init();
  setInterval(async () => {
    init();
  }, 1000 * 55);
}

App();
