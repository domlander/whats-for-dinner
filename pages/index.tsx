import React, { FunctionComponent } from "react";
import Head from "next/head";

import HomepageContainer from "../src/containers/HomepageContainer";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";

const Home: FunctionComponent = () => (
  <Layout>
    <Head>
      <title>What's For Dinner?</title>
      {/* MaterialUI recommends the Roboto font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <HomepageContainer />
    <Footer />
  </Layout>
);

export default Home;
