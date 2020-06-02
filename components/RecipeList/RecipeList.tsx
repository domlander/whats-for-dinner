import { FunctionComponent } from "react";
import RecipeCard from "../../components/RecipeCard";
import NoRecipesFound from "../../components/NoRecipesFound";
import { Recipe } from "../../interfaces/Recipe";
import Grid from "@material-ui/core/Grid";

type Hit = {
  readonly recipe: Recipe;
};

type RecipeFromApi = {
  readonly hits: Hit[];
};

interface Props {
  recipes: RecipeFromApi;
}

const RecipeList: FunctionComponent<Props> = ({ recipes }) =>
  !recipes?.hits.length ? (
    <NoRecipesFound />
  ) : (
      <>
        <Grid container>
          {recipes.hits.map((recipes) => {
            if (recipes?.recipe?.uri) {
              const recipeId: string = recipes.recipe.uri.split("#")[1];
              return <RecipeCard recipe={recipes.recipe} key={recipeId} />;
            }
          })}
        </Grid>
        <div id="edamam-badge" data-color="white"></div>
      </>
    );

export default RecipeList;
