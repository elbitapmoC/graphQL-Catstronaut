const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log(`
    🚀 Server's running!
    🔊 Listening @ Port: 3000
    📬 Query @ http://localhost:3000
  `);
});
