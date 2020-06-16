import { FunctionComponent, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import ApiError from "../../components/ApiError";
import Breadcrumbs from "../../components/Breadcrumbs";
import RecipeRundown from "../../components/RecipeRundown";
import { Recipe } from "../../interfaces/Recipe";
import * as utils from "../../utils";

import styles from './RecipeContainer.module.scss';

interface Props {
  readonly recipe?: Recipe;
}

const RecipeContainer: FunctionComponent<Props> = ({ recipe }) => {
  const [recipesUrl, setRecipesUrl] = useState<string>("");

  useEffect(() => {
    const data: string | null = localStorage.getItem("_ingredients");
    const parsedData: string = data && JSON.parse(data).toString();
    const url: string = `/recipes?ingredients=${parsedData}`
    if (parsedData) {
      setRecipesUrl(url);
    }
  }, []);

  if (!recipe) {
    return <ApiError />
  }

  const crumbs = recipesUrl
    ? [{ text: "Home", url: "/" }, { text: "Recipes", url: recipesUrl }, { text: recipe.label }]
    : [{ text: "Home", url: "/" }, { text: recipe.label }];

  return (
    <div className={styles.recipeContainer}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <Typography className={styles.heading} variant="h3">
        {utils.toSentenceCase(recipe.label)}
      </Typography>
      <RecipeRundown recipe={recipe} />
    </div>
  )
}

export default RecipeContainer;