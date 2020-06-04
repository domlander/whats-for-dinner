import { ChangeEvent } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MuiCheckbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

import styles from "./Checkbox.module.scss";

interface Props {
  readonly value: string;
  readonly isChecked: boolean;
  readonly handleClick: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FunctionComponent<Props> = ({
  value,
  isChecked,
  handleClick,
}: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={isChecked}
            onChange={(e) => handleClick(e)}
            name={value}
          />
        }
        label={value}
      />
    </Grid>
  );
};

export default Checkbox;
