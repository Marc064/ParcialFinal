const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Member {
    id: ID!
    name: String!
    lastname: String
    age: Int
    phone: String
    band: Band
  }

  type Band {
    id: ID!
    name: String!
    genre: String
    country: String
    members: [Member]
  }

  type Query {
    getAllBands: [Band]
    getBandByID(id: ID!): Band
    getAllMembers: [Member]
    getMemberByID(id: ID!): Member
  }

  
`;

module.exports = { typeDefs };