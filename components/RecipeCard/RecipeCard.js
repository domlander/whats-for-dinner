import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styles from "./RecipeCard.module.scss";

const RecipeCard = ({
  recipe: {
    label,
    image,
    url,
    ingredientLines,
    totalTime,
    calories,
    yield: serves,
  },
}) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <h2>{label}</h2>
    <img src={image} alt="delicious meal" />
    <div className={styles.fullRecipe}>
      <Button variant="contained" href={url} target="_blank">
        Full recipe
      </Button>
    </div>
    <div className={styles.ingredients}>
      <h4>Ingredients</h4>
      <ul>
        {/* We don't want to display duplicate ingredients */}
        {[...new Set(ingredientLines)].map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
    {totalTime > 0 && <p>{`${totalTime} minutes`}</p>}
    <p>
      Calories per serving: {Math.round(calories / serves).toLocaleString()}
    </p>
  </Grid>
);

export default RecipeCard;
