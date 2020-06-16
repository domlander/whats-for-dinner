import { FunctionComponent, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

import styles from "./Layout.module.scss";

interface Props {
  readonly children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
