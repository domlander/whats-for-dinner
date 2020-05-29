import RecipeListHeader from "../../components/RecipeListHeader";
import RecipeList from "../../components/RecipeList";
import ApiError from "../../components/ApiError";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";

import styles from "./RecipeListContainer.module.scss";

const RecipeListContainer = ({ recipes, ingredients, numRecipesPerPage }) => {
  const router = useRouter();
  const handlePaginationClick = (value) =>
    router
      .push(`/search?ingredients=${ingredients}&page=${value}`)
      .then(() => window.scrollTo(0, 0));

  const numRecipes = Math.min(
    recipes.count,
    process.env.NEXT_PUBLIC_NUM_RESULTS_ALLOWED_BY_API
  );

  const numPages = Math.ceil(numRecipes / numRecipesPerPage);

  return (
    <div>
      <RecipeListHeader ingredients={ingredients} />
      {!recipes?.hits || recipes.status === "error" ? (
        <ApiError />
      ) : (
        <>
          <RecipeList recipes={recipes} />
          <div className={styles.pagination}>
            <Pagination count={numPages} handleClick={handlePaginationClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeListContainer;
