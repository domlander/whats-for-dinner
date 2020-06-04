import LazyLoad from "react-lazyload";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import * as utils from "../../utils";
import styles from "./RecipeCard.module.scss";
import { FunctionComponent } from "react";
import { Recipe } from "../../interfaces/Recipe";

interface Props {
  readonly recipe: Recipe;
}

const RecipeCard: FunctionComponent<Props> = ({
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
    <Grid className={styles.recipeCard} item xs={12} sm={6} md={4} lg={3}>
      <a href={url} target="_blank">
        <LazyLoad
          height="100%"
          offset={300}
          placeholder={<img src="/plate.jpg" alt="plate" />}
        >
          {
            <img
              className={styles.mealImage}
              src={image}
              alt="delicious meal"
              title={label}
            />
          }
        </LazyLoad>
      </a>
      <div className={styles.info}>
        <Typography variant="h4" display="block">
          {utils.toSentenceCase(label)}
        </Typography>
        <div className={styles.ingredientsListHeading}>
          <Typography variant="h6">Ingredients</Typography>
        </div>
        <List>
          {/* We don't want to display duplicate ingredients */}
          {Array.from(new Set(ingredientLines))
            .slice(0, 6)
            .map((ingredient, i) => (
              <ListItem key={ingredient}>
                <ListItemText
                  className={styles.listItem}
                  primary={
                    i === 5
                      ? "..."
                      : utils.truncateLineWithEllipses(ingredient, 130)
                  }
                />
              </ListItem>
            ))}
        </List>
        <div className={styles.extraInfo}>
          {totalTime > 0 && (
            <dl className={styles.dl}>
              <dt className={styles.dt}>Prep and cook time: </dt>
              <dd className={styles.dd}>{`${totalTime} minutes`}</dd>
            </dl>
          )}
          {calories > 0 && serves > 0 && (
            <dl className={styles.dl}>
              <dt className={styles.dt}>Calories per serving: </dt>
              <dd className={styles.dd}>
                {Math.round(calories / serves).toLocaleString()}
              </dd>
            </dl>
          )}
          {serves > 0 && (
            <dl className={styles.dl}>
              <dt className={styles.dt}>Serves: </dt>
              <dd className={styles.dd}>
                {serves}
              </dd>
            </dl>
          )}
          <div className={styles.fullRecipeBtn}>
            <Button variant="contained" href={url} target="_blank">
              Full recipe
          </Button>
          </div>
        </div>
      </div>
    </Grid>
  );

export default RecipeCard;
