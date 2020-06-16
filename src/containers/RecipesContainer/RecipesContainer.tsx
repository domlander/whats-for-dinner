import { FunctionComponent } from "react";
import { useRouter, NextRouter } from "next/router";
import { Typography } from "@material-ui/core";

import ApiError from "../../components/ApiError";
import Breadcrumbs from "../../components/Breadcrumbs";
import Pagination from "../../components/Pagination";
import RecipeList from "../../components/RecipeList";
import { RecipeFromApi } from "../../interfaces/RecipeApi";
import * as utils from "../../utils";

import styles from "./RecipesContainer.module.scss";

interface Props {
  readonly recipes: RecipeFromApi;
  readonly ingredients: string;
  readonly numRecipesPerPage: number;
}

const RecipesContainer: FunctionComponent<Props> = ({
  recipes,
  ingredients,
  numRecipesPerPage,
}) => {
  const router: NextRouter = useRouter();
  const handlePaginationClick = (value: number): Promise<void> =>
    router
      .push(`/recipes?ingredients=${ingredients}&page=${value}`)
      .then(() => window.scrollTo(0, 0));

  if (!process.env.NEXT_PUBLIC_NUM_RESULTS_ALLOWED_BY_API) {
    return <ApiError />
  }
  let numResultsAllowedByApi: number;
  try {
    numResultsAllowedByApi = parseInt(process.env.NEXT_PUBLIC_NUM_RESULTS_ALLOWED_BY_API)
  }
  catch {
    return <ApiError />
  }

  const numRecipes: number = Math.min(recipes.count, numResultsAllowedByApi)
  const numPages: number = Math.ceil(numRecipes / numRecipesPerPage);

  return (
    <>
      {!recipes?.hits || recipes.status === "error" ? (
        <ApiError />
      ) : (
          <div className={styles.recipesContainer}>
            <Breadcrumbs
              crumbs={[
                { text: "Home", url: "/" },
                { text: "Recipes" }
              ]}
            />
            <Typography className={styles.pageHeading} variant="h4">
              {`Recipes featuring ${utils.formatWordsIntoReadableList(ingredients, ",")}`}
            </Typography>
            <div className={styles.recipesGrid}>
              <RecipeList recipes={recipes} />
            </div>
            <div className={styles.pagination}>
              <Pagination count={numPages} handleClick={handlePaginationClick} />
            </div>
          </div>
        )}
    </>
  );
};

export default RecipesContainer;
