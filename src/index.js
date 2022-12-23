import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider , InMemoryCache , ApolloClient} from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

const client = new ApolloClient({
  uri:process.env.REACT_APP_GRAPHCMS_URI,
  cache:new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   < ApolloProvider client={client} >
      <BrowserRouter>
       
            <App />
        
      </BrowserRouter>
   </ ApolloProvider>
);
