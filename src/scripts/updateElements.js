function updateElements (btcData, timestamp) {
  const {
    coinImage, coinName,
    coinPriceChange, coinPrice, lastUpdated
  } = require('./domObjects');

  coinImage.style.backgroundImage = `url(${btcData.image.large})`;
  coinName.textContent = btcData.name;
  coinPriceChange.textContent = Number(btcData.market_data.price_change_percentage_24h_in_currency.brl).toFixed(2) + '%';
  coinPrice.textContent = `R$ ${btcData.market_data.current_price.brl}`;
  lastUpdated.textContent = `Updated at ${timestamp.getHours() < 10 ? '0' + timestamp.getHours() : timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' + timestamp.getMinutes() : timestamp.getMinutes()}`;
}

module.exports = {
  updateElements
};
