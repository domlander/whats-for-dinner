import React from "react";
import Head from "next/head";

import Layout from "../../components/Layout";
import RecipeListContainer from "../../containers/RecipeListContainer";

export async function getServerSideProps(context) {
  const ingredients = Object.keys(context.query)[0];

  const apiUrl =
    "https://api.edamam.com/search" +
    `?q=${ingredients || "chicken"}` +
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
        <script src="https://developer.edamam.com/attribution/badge.js"></script>
      </Head>
      <RecipeListContainer recipes={recipes} />
    </Layout>
  );
}

export default byIngredients;
