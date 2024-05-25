const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    userfindById(id: Int!): User
    allUser: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!

  }
`;

module.exports = typeDefs;