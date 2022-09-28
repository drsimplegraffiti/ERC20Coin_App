const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const typeDefs = require('./types');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
