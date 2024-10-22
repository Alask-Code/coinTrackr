const $ = document.querySelector.bind(document);
// jQuery Side of Power!

module.exports = {
  coinName: $('.name'),
  coinPrice: $('.price'),
  coinSymbol: $('.symbol'),
  coinImage: $('.image'),
  currency: $('.currency'),
  coinPriceChange: $('.price-change'),
  lastUpdated: $('.last-updated')
};
