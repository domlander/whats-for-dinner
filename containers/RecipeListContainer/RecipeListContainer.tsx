import RecipeListHeader from "../../components/RecipeListHeader";
import RecipeList from "../../components/RecipeList";
import ApiError from "../../components/ApiError";
import Pagination from "../../components/Pagination";
import { useRouter, NextRouter } from "next/router";

import styles from "./RecipeListContainer.module.scss";
import { FunctionComponent } from "react";

interface Props {
  readonly recipes: any;
  readonly ingredients: string;
  readonly numRecipesPerPage: number;
}

const RecipeListContainer: FunctionComponent<Props> = ({
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
      <RecipeListHeader ingredients={ingredients} />
      {!recipes?.hits || recipes.status === "error" ? (
        <ApiError />
      ) : (
          <div>
            <RecipeList recipes={recipes} />
            <div className={styles.pagination}>
              <Pagination count={numPages} handleClick={handlePaginationClick} />
            </div>
          </div>
        )}
    </>
  );
};

export default RecipeListContainer;
