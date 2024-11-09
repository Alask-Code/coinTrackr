require('dotenv').config();

async function sync ({ id, currency }) {
  const fetchCoinPrice = require('./api/fetchCripto');
  const { updateElements } = require('./scripts/updateElements');
  const cryptoData = await fetchCoinPrice(id);
  console.log(cryptoData);
  const timestamp = new Date(cryptoData.last_updated);
  updateElements(cryptoData, timestamp, currency);
}

const info = {
  id: 'solana',
  currency: 'brl'
};

async function App () {
  sync(info);
  setInterval(async () => {
    sync(info);
  }, 850 * 55);
}

App();
