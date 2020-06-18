const { GraphQLServer } = require('graphql-yoga')

const { PORT = 4000 } = process.env;

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Mutation {
  post(url: String!, description: String!): Link!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`
// dummy data
let links = [{
  id: 'link-0',
  url: 'www.danielalexanderthompson.com',
  description: 'Personal website'
}]

const resolvers = {
  Query: {
    info: () => `This is the API`,
    feed: () => links,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server is up and running on ${PORT}`))