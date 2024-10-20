function updateElements (btcData, timestamp, currency) {
  const {
    coinImage, coinName,
    coinPriceChange, coinPrice, lastUpdated
  } = require('./domObjects');
  coinImage.style.backgroundImage = `url(${btcData.image.large})`;
  coinName.textContent = btcData.name;
  coinPriceChange.textContent = Number(btcData.market_data.price_change_percentage_24h_in_currency[currency]).toFixed(2) + '%';
  coinPrice.textContent = `${btcData.market_data.current_price[currency].toLocaleString('en-US', {
  style: 'currency',
  currency: currency
})}`;
  lastUpdated.textContent = `Updated at ${timestamp.getHours() < 10 ? '0' + timestamp.getHours() : timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' + timestamp.getMinutes() : timestamp.getMinutes()}`;
}

module.exports = {
  updateElements
};
