const { GraphQLServer } = require('graphql-yoga')

const { PORT = 4000 } = process.env;

const resolvers = {
  Query: {
    info: () => `This is the API`,
    feed: (root, args, context, info) => {
      return context.prisma.links()
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is up and running on ${PORT}`))