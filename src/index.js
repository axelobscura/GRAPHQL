import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello(){
      return 'This is my first Query!!!'
    },
    name(){
      return 'Axel Obscura Sarzotti'
    },
    location(){
      return 'México city'
    },
    bio(){
      return 'Full Stack developer'
    }
  }
}

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
})

server.start(() => {
  console.log('The server is up');
})