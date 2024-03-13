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


  type Mutation {
    createBand(
      id: ID!
      name: String!
      genre: String!
      country: String!
    ): Band
  
    deleteBand(id: ID!): Band
  
    updateBand(
      id: ID!
      name: String
      genre: String
      country: String
      members: [ID] 
    ): Band
  
    createMember(
      id: ID!
      name: String!
      lastname: String!
      age: Int!
      phone: String!
      band: Int!
    ): Member
  
    deleteMember(id: ID!): Member
    updateMember(
      id: ID!
      name: String
      lastname: String
      age: Int
      phone: String
      band: Int
    ): Member
  }
  
  
`;

module.exports = { typeDefs };