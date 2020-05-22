import Grid from "@material-ui/core/Grid";
import RecipeCard from "../RecipeCard";

const RecipeList = ({ recipes }) => {
  if (!recipes || !recipes.hits) {
    return <p>No recipes found</p>;
  }

  return (
    <>
      <h1>Recipes</h1>
      <Grid container>
        {recipes.hits.map((x) => {
          const recipeId = x.recipe.uri.split("#")[1];
          return <RecipeCard recipe={x.recipe} key={recipeId} />;
        })}
      </Grid>
    </>
  );
};

export default RecipeList;
