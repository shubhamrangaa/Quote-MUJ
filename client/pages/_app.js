import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MUJ E-Newsletter</title>
        <meta name='description' content='MUJ E-Newsletter' />
        <link rel='icon' href='/assets/Bioscope.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
