import React, { FunctionComponent } from "react";
import Head from "next/head";
import HomepageContainer from "../src/containers/HomepageContainer";
import Layout from "../src/components/Layout";

const Home: FunctionComponent = () => (
  <>
    <Head>
      <title>What's For Dinner?</title>
    </Head>
    <Layout>
      <HomepageContainer />
    </Layout>
  </>
);

export default Home;
