const createCoin = require('../mutations/coins');
const updateCoin = require('../mutations/coins');
const deleteCoin = require('../mutations/coins');
const userSignUp = require('../mutations/users');
const userLogin = require('../mutations/users');

module.exports = {
  Mutation: {
    createCoin,
    updateCoin,
    deleteCoin,
    userSignUp,
    userLogin,
  },
};
