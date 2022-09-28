const coinMutations = require('./mutations/coins');
const coinQueries = require('./queries/coins');
const userMutations = require('./mutations/users');
const userQueries = require('./queries/users');

module.exports = {
  Mutation: { ...coinMutations, ...userMutations },
  Query: { ...userQueries, ...coinQueries },
};
