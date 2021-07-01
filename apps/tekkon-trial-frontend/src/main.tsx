import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
console.log(process.env.NX_BASE_URL)
const client = new ApolloClient({
  uri: process.env.NX_BASE_URL,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
