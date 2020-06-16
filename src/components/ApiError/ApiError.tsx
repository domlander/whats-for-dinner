import { FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import styles from "./ApiError.module.scss";

const ApiError: FunctionComponent = () => (
  <div className={styles.apiError}>
    <p>
      We are unable to show you recipes at the moment. Try again in a few
      minutes.
    </p>
    <Button
      variant="contained"
      onClick={() => {
        window.location.reload(false);
      }}
    >
      Refresh page
    </Button>
  </div>
);

export default ApiError;
