import { FunctionComponent, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

import styles from "./Layout.module.scss";

interface Props {
  readonly children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <>
    {/* MaterialUI recommends the Roboto font */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
    />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;
