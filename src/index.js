const { GraphQLServer } = require('graphql-yoga')

const { PORT = 4000 } = process.env;

// dummy data
let links = [{
  id: 'link-0',
  url: 'www.danielalexanderthompson.com',
  description: 'Personal website'
}]

let idCount = links.length
const resolvers = {
  Query: {
    info: () => `This is the API`,
    feed: () => links,
  },
  Mutation: {
    // 2
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is up and running on ${PORT}`))