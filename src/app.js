require('dotenv').config();

async function app () {
  const { fetchCoinPrice, defaultFlags: flags } = require('./scripts/fetchCoinPrice');
  const { updateElements } = require('./scripts/updateElements');

  let btcData = await fetchCoinPrice('bitcoin', 'brl', flags);
  let timestamp = new Date(btcData.last_updated);
  updateElements(btcData, timestamp);

  setInterval(async () => {
    btcData = await fetchCoinPrice('bitcoin', 'brl', flags);
    timestamp = new Date(btcData.last_updated);
    updateElements(btcData, timestamp);
  }, 1000 * 60);
}

app();
