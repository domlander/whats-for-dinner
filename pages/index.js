import React from "react";
import Head from "next/head";

import Homepage from "../components/Homepage";
import Layout from "./../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>What's For Dinner?</title>
      </Head>
      <Homepage />
    </Layout>
  );
}
