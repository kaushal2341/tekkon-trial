/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {schema} from './app/queries';
import * as cors from 'cors';
import {graphqlHTTP} from 'express-graphql'
const app = express();

app.use(cors());
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}))

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
