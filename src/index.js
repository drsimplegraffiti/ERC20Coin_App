const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const { userTypeDefs, coinTypeDefs } = require('./types');
const resolvers = require('./resolvers');


const server = new ApolloServer({
  typeDefs: [userTypeDefs, coinTypeDefs],
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
