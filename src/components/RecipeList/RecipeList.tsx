import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "../RecipeCard";
import NoRecipesFound from "../NoRecipesFound";
import { RecipeFromApi } from "../../interfaces/RecipeApi";

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
              const recipeId: string = recipes.recipe.uri.split("#")[1].split('_')[1];
              recipes.recipe.id = recipeId;

              return <RecipeCard recipe={recipes.recipe} key={recipeId} />;
            }
          })}
        </Grid>
        <div id="edamam-badge" data-color="white"></div>
      </>
    );

export default RecipeList;
