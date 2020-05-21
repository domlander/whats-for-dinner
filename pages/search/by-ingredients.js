import React from "react";
import Head from "next/head";

import Layout from "../../components/Layout";
import RecipeList from "../../components/RecipeList";

export async function getServerSideProps() {
  const apiUrl =
    "https://api.edamam.com/search" +
    "?q={chicken}" +
    `&app_id=${process.env.APPLICATION_ID}` +
    `&app_key=${process.env.APPLICATION_KEY}` +
    "&from=0" +
    "&to=20";

  const res = await fetch(apiUrl);
  const recipes = await res.json();

  return { props: { recipes } };
}

function byIngredients({ recipes }) {
  return (
    <Layout>
      <Head>
        <title>What's For Dinner? | Recipes</title>
      </Head>
      <RecipeList recipes={recipes} />
    </Layout>
  );
}

export default byIngredients;
