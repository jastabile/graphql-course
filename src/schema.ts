import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema.graphql";

type Link = {
  id: string;
  url: string;
  description: string;
}

const links: Link[] = [{
  id: '1',
  url: 'www.howtographql.com',
  description: 'Hello description'
}]

const resolvers = {
  Query: {
    info: () => `Testing GraphQL`,
    feed: () => links,
  },
  Mutation: {
    post: (parent: unknown, args: { description: string, url: string }) => {
      let idCount = links.length;

      const link: Link = {
        id: `${idCount++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);

      return link;
    },
  },
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});