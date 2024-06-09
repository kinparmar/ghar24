const { gql } = require('apollo-server');

const typeDefs = gql`
  type Property {
    propertyid: Int
    imageUrl: String
    address: String
    description: String
    price: Float
    bedRooms: Int
    bathRooms: Int
    sqFeet: Float
    garages: Int
    time: Int
    moreImagesUrl_1: String
    moreImagesUrl_2: String
    isFav: Boolean
    longitude: Float
    latitude: Float
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }

  
  type Query {
    userfindById(id: Int!): User
    allUser: [User]!
    allProperties: [Property]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createProperty(propertyid: Int
                  imageUrl: String
                  address: String
                  description: String
                  price: Float
                  bedRooms: Int
                  bathRooms: Int
                  sqFeet: Float
                  garages: Int
                  time: Int
                  moreImagesUrl_1: String
                  moreImagesUrl_2: String
                  isFav: Boolean
                  longitude: Float
                  latitude: Float): Property!
  }
`;

module.exports = typeDefs;