import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import RecipeCard from "../../components/RecipeCard";
import styles from "./RecipeListContainer.module.scss";

const RecipeListContainer = ({ recipes }) => {
  if (!recipes || !recipes.hits) {
    return <p>No recipes found</p>;
  }

  return (
    <div className="recipeList">
      <div className={styles.topRow}>
        <Link href="/">
          <a>
            <RestaurantMenuIcon style={{ fontSize: 60 }} color="secondary" />
          </a>
        </Link>
        <span className={styles.heading}>
          <Typography variant="h2">Recipes</Typography>
        </span>
      </div>
      <Grid container spacing={3}>
        {recipes.hits.map((x) => {
          const recipeId = x.recipe.uri.split("#")[1];
          return <RecipeCard recipe={x.recipe} key={recipeId} />;
        })}
      </Grid>
      <div id="edamam-badge" data-color="white"></div>
    </div>
  );
};

export default RecipeListContainer;
