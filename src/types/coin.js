const { gql } = require('apollo-server');

module.exports = gql`
  type ERC20Coin {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
    priceChange: Float!
    priceChangePercent: Float!
    marketCap: Float!
    volume: Float!
    circulatingSupply: Float!
    totalSupply: Float!
    maxSupply: Float!
    ath: Float!
    athChange: Float!
    athChangePercent: Float!
    athDate: String!
    lastUpdated: String!
  }

  type Query {
    coin(id: ID!): ERC20Coin
    coins: [ERC20Coin]
  }

  type Mutation {
    createCoin(
      name: String!
      symbol: String!
      price: Float!
      priceChange: Float!
      priceChangePercent: Float!
      marketCap: Float!
      volume: Float!
      circulatingSupply: Float!
      totalSupply: Float!
      maxSupply: Float!
      ath: Float!
      athChange: Float!
      athChangePercent: Float!
      athDate: String!
      lastUpdated: String!
    ): ERC20Coin

    updateCoin(
      id: ID!
      name: String!
      symbol: String!
      price: Float!
      priceChange: Float!
      priceChangePercent: Float!
      marketCap: Float!
      volume: Float!
      circulatingSupply: Float!
      totalSupply: Float!
      maxSupply: Float!
      ath: Float!
      athChange: Float!
      athChangePercent: Float!
      athDate: String!
      lastUpdated: String!
    ): ERC20Coin

    deleteCoin(id: ID!): ERC20Coin
  }
`;
