const mongoose = require('mongoose');

const ERC20CoinSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceChange: {
    type: Number,
    required: true,
  },
  priceChangePercent: {
    type: Number,
    required: true,
  },
  marketCap: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  circulatingSupply: {
    type: Number,
    required: true,
  },
  totalSupply: {
    type: Number,
    required: true,
  },
  maxSupply: {
    type: Number,
    required: true,
  },
  ath: {
    type: Number,
    required: true,
  },
  athChange: {
    type: Number,
    required: true,
  },
  athChangePercent: {
    type: Number,
    required: true,
  },
  athDate: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Coin', ERC20CoinSchema);
