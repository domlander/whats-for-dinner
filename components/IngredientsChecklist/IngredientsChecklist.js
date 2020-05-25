import { useMemo, useCallback } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";

import styles from "./IngredientsChecklist.module.scss";
import Checkbox from "../Checkbox";
import * as utils from "../../utils";

const IngredientsChecklist = ({
  ingredients,
  checkedIngredients,
  setCheckedIngredients,
}) => {
  const handleCheckboxClick = useCallback((element) => {
    const ingredient = element.name;
    if (checkedIngredients.includes(ingredient)) {
      utils.removeElementFromArray(checkedIngredients, ingredient);
    } else {
      checkedIngredients.push(ingredient);
    }
    setCheckedIngredients([...checkedIngredients]);
    localStorage.setItem("_ingredients", JSON.stringify(checkedIngredients));
  }, []);

  return (
    <form>
      {ingredients ? (
        <FormGroup className={styles.itemList}>
          <Grid container>
            {ingredients.map((ingredient) => {
              const isChecked = checkedIngredients.includes(ingredient);
              return useMemo(
                () => (
                  <Checkbox
                    key={ingredient}
                    value={ingredient}
                    checked={isChecked}
                    handleClick={handleCheckboxClick}
                  />
                ),
                [ingredient, isChecked]
              );
            })}
          </Grid>
        </FormGroup>
      ) : (
        <p className={styles.noIngredients}>
          "No ingredients found! Please try again later."
        </p>
      )}
    </form>
  );
};

export default IngredientsChecklist;
