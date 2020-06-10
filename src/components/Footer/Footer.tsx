import { FunctionComponent } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExternalUrl from "../ExternalUrl";

import styles from "./Footer.module.scss";

const Footer: FunctionComponent = () => (
  <div className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.github} >
        <ExternalUrl className={styles.a} url="https://github.com/domlander/whats-for-dinner">
          <GitHubIcon fontSize="small" />
        </ExternalUrl>
        <p>What's for Dinner?</p>
      </div>
      <a className={styles.a} onClick={() => window.scrollTo(0, 0)}>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  </div>
);

export default Footer;
