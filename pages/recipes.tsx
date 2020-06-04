import React, { FunctionComponent } from "react";
import Head from "next/head";
import RecipeListContainer from "../src/containers/RecipeListContainer";
import Layout from "../src/components/Layout";
import { GetServerSideProps } from "next";

const numRecipesPerPage = 8;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { ingredients, page } = query;

  let myIngredients: string = ingredients?.toString() || "chicken";
  let thisPage: number = typeof page === 'string' && parseInt(page) || 1;

  const apiUrl: string =
    "https://api.edamam.com/search" +
    `?q=${myIngredients}` +
    `&app_id=${process.env.APPLICATION_ID}` +
    `&app_key=${process.env.APPLICATION_KEY}` +
    `&from=${(thisPage - 1) * numRecipesPerPage}` +
    `&to=${(thisPage - 1) * numRecipesPerPage + numRecipesPerPage}`;

  const res = await fetch(apiUrl);
  const recipes = await res.json();

  return { props: { recipes, ingredients: myIngredients, page } };
}

interface Props {
  readonly recipes: any;
  readonly ingredients: string;
}

const byIngredients: FunctionComponent<Props> = ({ recipes, ingredients }) => (
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

export default byIngredients;
