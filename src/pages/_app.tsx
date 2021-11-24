/** @format */

import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'layouts/layout';
import { Provider as JotaiProvider } from 'jotai';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </JotaiProvider>
  );
}
export default MyApp;
