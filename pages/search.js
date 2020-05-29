import React from "react";
import Head from "next/head";

import RecipeListContainer from "../containers/RecipeListContainer";
import Layout from "../components/Layout";

const numRecipesPerPage = 8;

export async function getServerSideProps(context) {
  let { ingredients, page } = context.query;

  ingredients = ingredients || "chicken";
  page = parseInt(page) || 1;

  const apiUrl =
    "https://api.edamam.com/search" +
    `?q=${ingredients}` +
    `&app_id=${process.env.APPLICATION_ID}` +
    `&app_key=${process.env.APPLICATION_KEY}` +
    `&from=${(page - 1) * numRecipesPerPage}` +
    `&to=${(page - 1) * numRecipesPerPage + numRecipesPerPage}`;

  const res = await fetch(apiUrl);
  const recipes = await res.json();

  return { props: { recipes, ingredients, page } };
}

function byIngredients({ recipes, ingredients }) {
  return (
    <Layout>
      <Head>
        <title>What's For Dinner? | Recipes</title>
        <script src="https://developer.edamam.com/attribution/badge.js"></script>
      </Head>
      <RecipeListContainer
        recipes={recipes}
        ingredients={ingredients}
        numRecipesPerPage={numRecipesPerPage}
      />
    </Layout>
  );
}

export default byIngredients;
