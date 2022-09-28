const Coin = require('../../models/coins.model'); // C:\Users\user\Desktop\eth_apollo\src\models\coins.model.js

// create coin
const createCoin = async (_, input) => {
  // check if coin exists
  const coinExists = await Coin.findOne({ symbol: input.symbol });
  if (coinExists) {
    throw new Error('Coin already exists');
  }

  const coin = await Coin.create({
    name: input.name,
    symbol: input.symbol,
    price: input.price,
    priceChange: input.priceChange,
    priceChangePercent: input.priceChangePercent,
    marketCap: input.marketCap,
    volume: input.volume,
    circulatingSupply: input.circulatingSupply,
    totalSupply: input.totalSupply,
    maxSupply: input.maxSupply,
    ath: input.ath,
    athChange: input.athChange,
    athChangePercent: input.athChangePercent,
    athDate: input.athDate,
    lastUpdated: input.lastUpdated,
  });
  return coin;
};

// update coin
const updateCoin = async (_, input) => {
  console.log(input);
  const coin = await Coin.findOneAndUpdate(
    { _id: input.id },
    {
      name: input.name,
      symbol: input.symbol,
      price: input.price,
      priceChange: input.priceChange,
      priceChangePercent: input.priceChangePercent,
      marketCap: input.marketCap,
      volume: input.volume,
      circulatingSupply: input.circulatingSupply,
      totalSupply: input.totalSupply,
      maxSupply: input.maxSupply,
      ath: input.ath,
      athChange: input.athChange,
      athChangePercent: input.athChangePercent,
      athDate: input.athDate,
      lastUpdated: input.lastUpdated,
    },
    { new: true }
  );

  if (!coin) {
    throw new Error('Coin not found');
  }
  return coin;
};

// delete coin using mongodb _id
const deleteCoin = async (_, input) => {
  const coin = await Coin.findOneAndDelete({ _id: input.id });

  if (!coin) {
    throw new Error('Coin not found');
  }
  return coin;
};

module.exports = {
  createCoin,
  updateCoin,
  deleteCoin,
};
