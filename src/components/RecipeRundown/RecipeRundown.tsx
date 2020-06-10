
import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Recipe } from "../../interfaces/Recipe";
import ExternalUrl from "../ExternalUrl";

import styles from "./RecipeRundown.module.scss";

interface Props {
  readonly recipe: Recipe;
}

const RecipeRundown: FunctionComponent<Props> = ({
  recipe: {
    calories,
    image,
    ingredientLines,
    label,
    source,
    totalTime,
    url,
    yield: serves,
  },
}) => (
    <div className={styles.rundown}>
      <img className={styles.image} src={image} alt={`image of ${label}`} />
      <div className={styles.gridContainer}>
        <div>
          <p>
            Source:{' '}
            <ExternalUrl url={url}>
              {source}
            </ExternalUrl>
          </p>
        </div>
        {totalTime > 0 && (
          <div>
            <p><b>{`${totalTime} minutes`}</b>{' '} to prepare and cook</p>
          </div>
        )}
        {calories > 0 && serves > 0 && (
          <div>
            <p><b>{Math.round(calories / serves).toLocaleString()}</b>{' '} calories per serving</p>
          </div>
        )}
        {serves > 0 && (
          <div>
            <p>Serves <b>{serves}</b></p>
          </div>
        )}
      </div>
      <div className={styles.ingredients}>
        <Typography variant="h6">
          Ingredients
          </Typography>
        <List>
          {/* The API sometimes returns duplicate ingredients so we need to filter them out */}
          {Array.from(new Set(ingredientLines))
            .map((ingredient) => (
              <ListItem key={ingredient}>
                <ListItemText
                  className={styles.listItem}
                  primary={ingredient}
                />
              </ListItem>
            ))}
        </List>
        <div className={styles.externalRecipe}>
          <Typography variant="h6">
            Recipe
          </Typography>
          <p>
            See the full recipe on the {source} website:{' '}
            <ExternalUrl url={url}>
              {url}
            </ExternalUrl>
          </p>
        </div>
      </div>
    </div>
  );

export default RecipeRundown;
