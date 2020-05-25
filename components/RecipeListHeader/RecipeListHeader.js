import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import * as utils from "../../utils";

import styles from "./RecipeListHeader.module.scss";

const RecipeListHeader = ({ ingredients }) => (
  <div className={styles.topRow}>
    <Link href="/">
      <a>
        <RestaurantMenuIcon style={{ fontSize: 60 }} color="secondary" />
      </a>
    </Link>
    <span className={styles.headingContainer}>
      <Typography className={styles.heading} variant="h3">
        Recipes featuring{" "}
        {utils.formatWordsIntoHumanReadableList(ingredients, ",")}
      </Typography>
    </span>
  </div>
);

export default RecipeListHeader;
