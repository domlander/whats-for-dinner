import { FunctionComponent, ReactNode } from "react";
import styles from "./Layout.module.scss";

interface Props {
  readonly children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
