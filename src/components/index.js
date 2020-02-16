import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';

import Layout from './Layout/Layout';

const {
	REACT_APP_GRAPHQL_URI,
	REACT_APP_GRAPHQL_TOKEN
} = process.env;

const config = {
	uri: REACT_APP_GRAPHQL_URI,
	cache: new InMemoryCache(),
	request: operation => {
		const token = REACT_APP_GRAPHQL_TOKEN;

		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		});
	}
};

const client = new ApolloClient(config);

const App = () => (
	<ApolloProvider client={client}>
		<Layout/>
	</ApolloProvider>
);

export default App;
