import { ApolloProvider } from "@apollo/react-hooks";

import { client } from "../apollo";

import "assets/styles/index.sass";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
