import { FunctionComponent } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

import styles from "./Header.module.scss";

const Header: FunctionComponent = () => (
  <div className={styles.header}>
    <Link href="/">
      <a>
        <RestaurantMenuIcon style={{ fontSize: 60 }} color="secondary" />
      </a>
    </Link>
    <Typography className={styles.heading} color="secondary" variant="h5">
      What's For Dinner?
    </Typography>
  </div>
);

export default Header;
