import Layout from "@/components/Layout/Layout";
import Head from "next/head";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Food Nest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
