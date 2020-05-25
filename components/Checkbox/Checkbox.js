import FormControlLabel from "@material-ui/core/FormControlLabel";
import MuiCheckbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ value, isChecked, handleClick }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={isChecked}
            onChange={(e) => handleClick(e.target)}
            name={value}
          />
        }
        label={value}
      />
    </Grid>
  );
};

export default Checkbox;
