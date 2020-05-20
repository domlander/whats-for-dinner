import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";

import styles from "./IngredientsChecklist.module.scss";
import IngredientsChecklistItem from "../IngredientsChecklistItem";

const IngredientsChecklist = ({
  ingredients,
  checkedIngredients,
  setCheckedIngredients,
}) => (
  <form>
    {ingredients ? (
      <FormGroup className={styles.itemList}>
        <Grid container>
          {ingredients.map((ingredient) => (
            <IngredientsChecklistItem
              key={ingredient}
              ingredient={ingredient}
              checkedIngredients={checkedIngredients}
              setCheckedIngredients={setCheckedIngredients}
            />
          ))}
        </Grid>
      </FormGroup>
    ) : (
      <p className={styles.noIngredients}>
        "No ingredients found! Please try again later."
      </p>
    )}
  </form>
);

export default IngredientsChecklist;
