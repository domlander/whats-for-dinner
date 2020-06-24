import React, { FunctionComponent } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import Layout from "../src/components/Layout";
import RecipeContainer from "../src/containers/RecipeContainer";
import { Recipe } from "../src/interfaces/Recipe";
import ApiError from "../src/components/ApiError";

export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  let recipe = null;

  if (typeof id !== 'undefined') {
    const url: string =
      "https://api.edamam.com/search" +
      `?r=http://www.edamam.com/ontologies/edamam.owl%23recipe_${id}` +
      `&app_id=${process.env.APPLICATION_ID}` +
      `&app_key=${process.env.APPLICATION_KEY}`

    const res = await fetch(url);
    const recipeArray = await res.json();
    recipe = recipeArray[0] || null;
  }

  return { props: { recipe } };
}

interface Props {
  readonly recipe?: Recipe;
}

const RecipePage: FunctionComponent<Props> = ({ recipe }) => {
  if (!recipe) {
    return <ApiError />
  }

  return (
    <>
      <Head>
        <title>{`What's For Dinner?${recipe ? (` | ${recipe.label}`) : ''}`}</title>
      </Head>
      <Layout>
        <RecipeContainer
          recipe={recipe}
        />
      </Layout>
    </>
  )
};

export default RecipePage;
