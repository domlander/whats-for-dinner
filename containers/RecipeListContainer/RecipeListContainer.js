import RecipeListHeader from "../../components/RecipeListHeader";
import RecipeList from "../../components/RecipeList";
import ApiError from "../../components/ApiError";
import styles from "./RecipeListContainer.module.scss";

const RecipeListContainer = ({ recipes, ingredients }) => (
  <div>
    <RecipeListHeader ingredients={ingredients} />
    {!recipes?.hits || recipes.status === "error" ? (
      <ApiError />
    ) : (
      <RecipeList recipes={recipes} />
    )}
  </div>
);

export default RecipeListContainer;
