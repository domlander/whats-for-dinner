import React from "react";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import Recipes from "../../components/Recipes";

function byIngredients() {
  return (
    <Layout>
      <Head>
        <title>What's For Dinner | Recipes</title>
      </Head>
      <Recipes />
    </Layout>
  );
}

export default byIngredients;
