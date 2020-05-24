import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import RecipeCard from "../../components/RecipeCard";
import styles from "./RecipeListContainer.module.scss";
import { Button } from "@material-ui/core";

const RecipeListContainer = ({ recipes, ingredients }) => {
  return (
    <div className={styles.recipeList}>
      <div className={styles.topRow}>
        <Link href="/">
          <a>
            <RestaurantMenuIcon style={{ fontSize: 60 }} color="secondary" />
          </a>
        </Link>
        <span className={styles.heading}>
          <Typography variant="h3">
            Recipes featuring{" "}
            {ingredients
              .toLowerCase()
              .replace(/,/g, ", ")
              .replace(/,([^,]*)$/, " and$1")}
          </Typography>
        </span>
      </div>
      {!recipes || recipes.status === "error" ? (
        <p>
          We are unable to show you recipes at the moment. Try again in a few
          minutes.
          <Button
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Refresh page
          </Button>
        </p>
      ) : !recipes.hits.length ? (
        <p>
          No recipes found!{" "}
          <Link href="/">
            <a>Try removing some ingredients</a>
          </Link>
        </p>
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
      )}
    </div>
  );
};

export default RecipeListContainer;
