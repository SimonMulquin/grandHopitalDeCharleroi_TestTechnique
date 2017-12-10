import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { typeDefs } from '/imports/api/graphql/schema';
import resolvers from '/imports/api/graphql/resolvers';
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
createApolloServer({
  schema,
});
