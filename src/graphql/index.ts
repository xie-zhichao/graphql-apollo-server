import { ApolloServer, gql } from 'apollo-server-koa'
import { prisma } from '../_prisma_generated/prisma-client'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar DateTime

  type Query {
    feed: [Post!]!
    drafts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createDraft(title: String!, content: String!, authorEmail: String!): Post!
    deletePost(id: ID!): Post
    publish(id: ID!): Post
  }

  type Post {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    title: String!
    content: String!
    author: User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    posts: [Post!]!
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    feed: (parent: any, args: any, ctx: any) => ctx.db.posts({ where: { published: true } }),
    drafts: (parent: any, args: any, ctx: any) =>
      ctx.db.posts({ where: { published: false } }),
    post: (parent: any, args: any, ctx: any) => ctx.db.post({ id: args.id })
  },
  Mutation: {
    createDraft: (parent: any, args: any, ctx: any) => {
      return ctx.db.createPost({
        title: args.title,
        content: args.content,
        author: { connect: { email: args.authorEmail } }
      })
    },

    deletePost: (parent: any, { id }: any, ctx: any) => ctx.db.deletePost({ id }),

    publish: (parent: any, { id }: any, ctx: any) => {
      return ctx.db.updatePost({
        where: { id },
        data: { published: true }
      })
    }
  },
  Post: {
    author: (parent: any, args: any, ctx: any) => ctx.db.post({ id: parent.id }).author()
  },
  User: {
    posts: (parent: any, args: any, ctx: any) => ctx.db.user({ id: parent.id }).posts()
  }
}

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: { db: prisma }
})

export default server