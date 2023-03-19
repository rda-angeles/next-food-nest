import Layout from "@/components/Layout/Layout";
import Head from "next/head";

import "@/styles/globals.scss";
import store from "@/features/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Food Nest</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
