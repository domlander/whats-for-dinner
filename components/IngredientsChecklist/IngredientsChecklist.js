import { useMemo, useCallback } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";

import styles from "./IngredientsChecklist.module.scss";
import Checkbox from "../Checkbox";

const IngredientsChecklist = ({
  ingredients,
  checkedIngredients,
  setCheckedIngredients,
}) => {
  const addIngredient = (ingredient) => {
    checkedIngredients.push(ingredient);
    setCheckedIngredients([...checkedIngredients]);
  };

  const removeIngredient = (ingredient) => {
    var index = checkedIngredients.indexOf(ingredient);
    if (index !== -1) {
      checkedIngredients.splice(index, 1);
      setCheckedIngredients([...checkedIngredients]);
    }
  };

  const handleCheckboxClick = useCallback((element) => {
    const ingredient = element.name;
    if (checkedIngredients.includes(ingredient)) {
      removeIngredient(ingredient);
    } else {
      addIngredient(ingredient);
    }
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
