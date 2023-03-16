import Layout from "@/components/Layout/Layout";
import Head from "next/head";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Food Nest</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
