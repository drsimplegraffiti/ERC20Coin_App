const Coin = require('../../models/coins.model'); // C:\Users\user\Desktop\eth_apollo\src\models\coins.model.js

// get all coins
const coins = async () => {
  const coins = await Coin.find();
  console.log(coins);
  return coins;
};

// get coin by id
const coin = async (_, { id }) => {
  const coin = await Coin.findOne({ _id: id });
  if (!coin) {
    throw new Error('Coin not found');
  }

  return coin;
};

module.exports = {
  coins,
  coin,
};
