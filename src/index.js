const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const { userTypeDefs, coinTypeDefs } = require('./types');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: [userTypeDefs, coinTypeDefs],
  resolvers,
  context: ({ req, res }) => ({ req, res }), //context is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query.
});

const port = process.env.PORT || 4003;

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
