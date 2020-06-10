import React, { FunctionComponent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import Layout from "../src/components/Layout";
import RecipesContainer from "../src/containers/RecipesContainer";
import { RecipeFromApi } from "../src/interfaces/RecipeApi";

const numRecipesPerPage = 8;

export const getServerSideProps: GetServerSideProps = async (
  { query: { ingredients = 'chicken', page } }
) => {
  let thisPage: number = typeof page === 'string' && parseInt(page) || 1;

  const apiUrl: string =
    "https://api.edamam.com/search" +
    `?q=${ingredients.toString()}` +
    `&app_id=${process.env.APPLICATION_ID}` +
    `&app_key=${process.env.APPLICATION_KEY}` +
    `&from=${(thisPage - 1) * numRecipesPerPage}` +
    `&to=${(thisPage - 1) * numRecipesPerPage + numRecipesPerPage}`;

  const res = await fetch(apiUrl);
  const recipes = await res.json();

  return { props: { recipes, ingredients } };
}

interface Props {
  readonly recipes: RecipeFromApi;
  readonly ingredients: string;
}

const RecipesPage: FunctionComponent<Props> = ({ recipes, ingredients }) => (
  <Layout>
    <Head>
      <title>What's For Dinner? | Recipes</title>
      <script src="https://developer.edamam.com/attribution/badge.js"></script>
    </Head>
    <RecipesContainer
      recipes={recipes}
      ingredients={ingredients}
      numRecipesPerPage={numRecipesPerPage}
    />
  </Layout>
);

export default RecipesPage;
