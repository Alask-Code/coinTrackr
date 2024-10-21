const {
  coinSymbol,
  coinImage, coinName,
  currency: coinCurrency,
  coinPriceChange, coinPrice, lastUpdated
} = require('./domObjects');

module.exports = {
  updateElements: (cryptoData, timestamp, currency) => {
    coinImage.style.backgroundImage = `url(${cryptoData.image.large})`;
    coinName.textContent = cryptoData.name;
    coinSymbol.textContent = String(cryptoData.symbol).toUpperCase();
    coinCurrency.textContent = String(currency).toUpperCase();
    coinPriceChange.textContent = Number(cryptoData.market_data.price_change_percentage_24h_in_currency[currency]).toFixed(2) + '%';
    coinPrice.textContent = `${cryptoData.market_data.current_price[currency].toLocaleString('en-US', {
  style: 'currency',
  currency: currency
})}`;
    lastUpdated.textContent = `Updated at ${timestamp.getHours() < 10 ? '0' + timestamp.getHours() : timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' + timestamp.getMinutes() : timestamp.getMinutes()}`;
  }
};
