import { FunctionComponent } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

import styles from "./Header.module.scss";

interface Props {
  readonly heading: string;
}

const Header: FunctionComponent<Props> = ({ heading }) => (
  <div className={styles.topRow}>
    <Link href="/">
      <a>
        <RestaurantMenuIcon style={{ fontSize: 60 }} color="secondary" />
      </a>
    </Link>
    <span className={styles.headingContainer}>
      <Typography className={styles.heading} variant="h3">
        {heading}
      </Typography>
    </span>
  </div>
);

export default Header;
