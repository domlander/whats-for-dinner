import { FunctionComponent } from "react";
import Link from "@material-ui/core/Link";
import LaunchIcon from '@material-ui/icons/Launch';

import styles from './ExternalUrl.module.scss'

interface Props {
  readonly url: string;
  readonly className?: string;
  readonly showIcon?: boolean;
}

const ExternalUrl: FunctionComponent<Props> = ({ url, className = '', showIcon = false, children }) => (
  <>
    <Link
      color='initial'
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      {showIcon && <LaunchIcon className={styles.icon} fontSize="inherit" />}
    </Link >
  </>
);

export default ExternalUrl;
