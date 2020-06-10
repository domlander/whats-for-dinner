import { FunctionComponent } from "react";
import { useRouter, NextRouter } from "next/router";

import Header from "../../components/Header";
import RecipeList from "../../components/RecipeList";
import ApiError from "../../components/ApiError";
import Pagination from "../../components/Pagination";
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
          <>
            <Header heading={`Recipes featuring ${utils.formatWordsIntoHumanReadableList(ingredients, ",")}`} />
            <RecipeList recipes={recipes} />
            <div className={styles.pagination}>
              <Pagination count={numPages} handleClick={handlePaginationClick} />
            </div>
          </>
        )}
    </>
  );
};

export default RecipesContainer;
