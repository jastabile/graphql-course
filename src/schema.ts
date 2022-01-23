import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema.graphql";

type Link = {
  id: string;
  url: string;
  description: string;
}

const resolvers = {
  Query: {
    info: () => 'lala',
    feed: () => [{id: 1, url: 'asdf', description: 'first link'}]
  },
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});