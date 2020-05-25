import Grid from "@material-ui/core/Grid";
import RecipeCard from "../../components/RecipeCard";
import NoRecipesFound from "../../components/NoRecipesFound";

const RecipeList = ({ recipes }) =>
  !recipes.hits.length ? (
    <NoRecipesFound />
  ) : (
    <>
      <Grid container>
        {recipes.hits.map((x) => {
          const recipeId = x.recipe.uri.split("#")[1];
          return <RecipeCard recipe={x.recipe} key={recipeId} />;
        })}
      </Grid>
      <div id="edamam-badge" data-color="white"></div>
    </>
  );

export default RecipeList;
