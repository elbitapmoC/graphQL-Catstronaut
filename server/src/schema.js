const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid."
    tracksForHome: [Track!]!
  }

  "Group of modules to teach about a specific topic"
  type Track {
    id: ID!
    "Tracks title"
    title: String!
    "Tracks main author"
    author: Author!
    "Tracks main illustration to show in track card or track page detail"
    thumbnail: String
    "Length of the video"
    length: interface
    "Number of modules in this item"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Authors full name, first and last"
    name: String!
    "Authors profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
