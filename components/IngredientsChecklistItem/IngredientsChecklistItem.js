import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

import styles from "./IngredientsChecklistItem.module.scss";

const IngredientsChecklistItem = ({
  ingredient,
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

  const handleCheckboxClick = (element) => {
    const ingredient = element.name;
    if (checkedIngredients.includes(ingredient)) {
      removeIngredient(ingredient);
    } else {
      addIngredient(ingredient);
    }
    localStorage.setItem("_ingredients", JSON.stringify(checkedIngredients));
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedIngredients.includes(ingredient)}
            onChange={(e) => handleCheckboxClick(e.target)}
            name={ingredient}
          />
        }
        label={ingredient}
      />
    </Grid>
  );
};

export default IngredientsChecklistItem;
