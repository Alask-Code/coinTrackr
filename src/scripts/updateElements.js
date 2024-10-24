const {
  coinSymbol,
  coinImage, coinName,
  currency: coinCurrency,
  coinPriceChange, coinPrice, lastUpdated
} = require('./domObjects');

module.exports = {
  updateElements: (cryptoData, timestamp, currency) => {
    // Image
    coinImage.style.backgroundImage = `url(${cryptoData.image.large})`;
    // Name
    coinName.textContent = cryptoData.name;
    // Symbol
    coinSymbol.textContent = String(cryptoData.symbol).toUpperCase();
    // Currency
    coinCurrency.textContent = String(currency).toUpperCase();
    // Price Change
    const priceChange = Number(cryptoData.market_data.price_change_percentage_24h_in_currency[currency]).toFixed(2);
    coinPriceChange.classList.add(priceChange > 0 ? 'positive' : 'negative');
    coinPriceChange.classList.remove(priceChange < 0 ? 'positive' : 'negative');
    coinPriceChange.textContent = priceChange + '%';
    coinPrice.textContent = `${cryptoData.market_data.current_price[currency].toLocaleString('en-US', {
  style: 'currency',
  currency: currency
})}`;
    lastUpdated.textContent = `Updated at ${timestamp.getHours() < 10 ? '0' + timestamp.getHours() : timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' + timestamp.getMinutes() : timestamp.getMinutes()}.`;
  }
};
