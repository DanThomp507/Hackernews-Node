const { GraphQLServer } = require('graphql-yoga')

const { PORT = 4000 } = process.env;

const typeDefs = `
type Query {
    info: String!
}
`

const resolvers = {
  Query: {
    info: () => `This is the API`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server is up and running on ${PORT}`))