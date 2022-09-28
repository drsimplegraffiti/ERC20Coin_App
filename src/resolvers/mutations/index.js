const createCoin  = require('./mutations/coins');
const updateCoin  = require('./mutations/coins');
const deleteCoin  = require('./mutations/coins');

module.exports = {
  Mutation: {
    createCoin,
    updateCoin,
    deleteCoin,
  },
};

