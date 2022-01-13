/** @format */

import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'layouts/layout';
import { Provider as JotaiProvider } from 'jotai';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </JotaiProvider>
  );
}
export default MyApp;
