import ApolloClient from 'apollo-client';
import { createMeteorNetworkInterface, meteorClientConfig } from 'meteor/apollo';

const networkInterface = createMeteorNetworkInterface(customNetworkInterface = {
  uri: Meteor.absoluteUrl("graphql", { rootUrl: 'http://192.168.1.45:3000'}),
  // use a batched network interface instead of a classic network interface
  batchingInterface: true,
});

const client = new ApolloClient(meteorClientConfig({ networkInterface }));

export default client;
