const coins = require('../queries/coins');
const coin = require('../queries/coins');

const users = require('../queries/users');
const user = require('../queries/users');

module.exports = {
  Query: {
    coins,
    coin,
    users,
    user,
  },
};
