import React, { FunctionComponent } from "react";
import Head from "next/head";
import RecipeListContainer from "../containers/RecipeListContainer";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";

const numRecipesPerPage = 8;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { ingredientsFromQuery, pageFromQuery } = query;

  let ingredients: string = ingredientsFromQuery?.toString() || "chicken";
  let page: number = typeof pageFromQuery === 'string' && parseInt(pageFromQuery) || 1;

  const apiUrl: string =
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
