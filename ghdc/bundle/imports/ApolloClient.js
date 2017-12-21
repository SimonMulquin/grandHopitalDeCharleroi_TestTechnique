import ApolloClient from 'apollo-client';
import { createMeteorNetworkInterface, meteorClientConfig } from 'meteor/apollo';

const networkInterface = createMeteorNetworkInterface(customNetworkInterface = {
  uri: Meteor.absoluteUrl("graphql"),
  // use a batched network interface instead of a classic network interface
  batchingInterface: true,
});

const client = new ApolloClient(meteorClientConfig({ networkInterface }));

export default client;
