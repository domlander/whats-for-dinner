import { useMemo, useCallback, ChangeEvent, Dispatch, SetStateAction } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";

import styles from "./IngredientsChecklist.module.scss";
import Checkbox from "../Checkbox";
import * as utils from "../../utils";

interface Props {
  readonly ingredients: ReadonlyArray<string>;
  readonly checkedIngredients: string[];
  readonly setCheckedIngredients: Dispatch<SetStateAction<string[]>>;
}

const IngredientsChecklist: React.FunctionComponent<Props> = ({
  ingredients,
  checkedIngredients,
  setCheckedIngredients,
}) => {
  const handleCheckboxClick = useCallback(
    (element: ChangeEvent<HTMLInputElement>) => {
      const ingredient: string = element.target.name;
      if (checkedIngredients.includes(ingredient)) {
        utils.removeElementFromArray(checkedIngredients, ingredient);
      } else {
        checkedIngredients.push(ingredient);
      }
      setCheckedIngredients([...checkedIngredients]);
      localStorage.setItem("_ingredients", JSON.stringify(checkedIngredients));
    },
    [checkedIngredients]
  );

  return (
    <form>
      {ingredients ? (
        <FormGroup className={styles.itemList}>
          <Grid container>
            {ingredients.map((ingredient: string) => {
              const isChecked: boolean = checkedIngredients.includes(ingredient);
              return useMemo(
                () => (
                  <Checkbox
                    key={ingredient}
                    value={ingredient}
                    isChecked={isChecked}
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
