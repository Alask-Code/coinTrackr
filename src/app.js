require('dotenv').config();
const flags = {
  localization: false,
  tickers: false,
  communityData: false,
  developerData: false
};
async function sync ({ id, currency }) {
  const fetchCoinPrice = require('./api/fetchCripto');
  const { updateElements } = require('./scripts/updateElements');
  const cryptoData = await fetchCoinPrice(id, flags);
  console.log(cryptoData);
  const timestamp = new Date(cryptoData.last_updated);
  updateElements(cryptoData, timestamp, currency);
}

const info = {
  id: 'bitcoin',
  currency: 'brl'
};

async function App () {
  sync(info);
  setInterval(async () => {
    sync(info);
  }, 1000 * 55);
}

App();
