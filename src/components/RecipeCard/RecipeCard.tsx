import Link from "next/link";
import { FunctionComponent } from "react";
import LazyLoad from "react-lazyload";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import * as utils from "../../utils";
import { Recipe } from "../../interfaces/Recipe";
import styles from "./RecipeCard.module.scss";
import ExternalUrl from "../ExternalUrl";

interface Props {
  readonly recipe: Recipe;
}

const RecipeCard: FunctionComponent<Props> = ({
  recipe: {
    calories,
    id,
    image,
    label,
    source,
    totalTime,
    url,
    yield: serves,
  }
}) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={styles.gridItem}>
        <Link href={`/recipe?id=${id}`}>
          <a>
            <LazyLoad
              height="100%"
              offset={300}
              placeholder={<img src="/plate.jpg" alt="plate" />}
            >
              {
                <img
                  className={styles.cardImage}
                  src={image}
                  alt="delicious meal"
                  title={label}
                />
              }
            </LazyLoad>
          </a>
        </Link>
        <div className={styles.cardContent}>
          <Typography className={styles.label} variant="h5" display="block">
            {utils.truncateLineWithEllipses(utils.toSentenceCase(label), 40)}
          </Typography>
          <dl className={styles.dl}>
            {totalTime > 0 && (
              <>
                <dt className={styles.dt}>Prep and cook time: </dt>
                <dd className={styles.dd}>{`${totalTime} minutes`}</dd>
              </>
            )}
            {calories > 0 && serves > 0 && (
              <>
                <dt className={styles.dt}>Calories per serving: </dt>
                <dd className={styles.dd}>{Math.round(calories / serves).toLocaleString()}</dd>
              </>
            )}
            {serves > 0 && (
              <>
                <dt className={styles.dt}>Serves: </dt>
                <dd className={styles.dd}>{serves}</dd>
              </>
            )}
          </dl>
          <div className={styles.buttons}>
            <div>
              <Link href={`/recipe?id=${id}`}>
                <Button
                  component={"a"}
                  color="secondary"
                  variant="contained"
                  href={`/recipe?id=${id}`}
                >
                  Recipe
                </Button>
              </Link>
            </div>
            <div className={styles.externalUrl}>
              Full recipe at{' '}
              <ExternalUrl url={url}>
                {source}
              </ExternalUrl>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );

export default RecipeCard;
