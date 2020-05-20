import { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./Homepage.module.scss";

import availableIngredients from "./AvailableIngredients";

import IngredientsChecklist from "../IngredientsChecklist";

function Homepage() {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  return (
    <div className={styles.homepage}>
      <Typography variant="h3">Ingredients</Typography>
      <div className={styles.checklist}>
        <IngredientsChecklist
          ingredients={availableIngredients}
          checkedIngredients={checkedIngredients}
          setCheckedIngredients={setCheckedIngredients}
        />
      </div>
      <div className={styles.search}>
        <Button variant="contained" href="/search/by-ingredients">
          Search recipes
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
