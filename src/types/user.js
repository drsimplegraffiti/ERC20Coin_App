const { gql } = require('apollo-server');


module.exports = gql`
  type User {
    id: ID!
    username: String
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    userSignUp(
      username: String!
      email: String!
      password: String!
    ): User!

    userLogin(email: String!, password: String!): User
  }
`;

