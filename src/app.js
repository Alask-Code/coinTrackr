require('dotenv').config();

async function app () {
  const { fetchCoinPrice, defaultFlags: flags } = require('./scripts/fetchCoinPrice');
  const { updateElements } = require('./scripts/updateElements');

  let btcData = await fetchCoinPrice('solana', 'brl', flags);
  let timestamp = new Date(btcData.last_updated);
  updateElements(btcData, timestamp);

  setInterval(async () => {
    btcData = await fetchCoinPrice('solana', 'brl', flags);
    timestamp = new Date(btcData.last_updated);
    updateElements(btcData, timestamp);
    console.log(btcData);
  }, 1000 * 55);
}

app();
