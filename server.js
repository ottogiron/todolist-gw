import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import compression from 'compression';
import { ApolloEngine } from 'apollo-engine';


const GRAPHQL_PORT = 3000;


const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
});




const graphQLServer = express();

// Instead of app.listen():
engine.listen({
  port: GRAPHQL_PORT,
  graphqlPaths: ['/graphql'],
  expressApp: graphQLServer,
  launcherOptions: {
    startupTimeout: 3000,
  },
}, () => {
  console.log('Listening!');
});


graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema, tracing: true}));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
graphQLServer.use(compression());
