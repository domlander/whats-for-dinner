import { FunctionComponent } from "react";
import Link from "@material-ui/core/Link";

import styles from './ExternalUrl.module.scss'

interface Props {
  readonly url: string;
  readonly className?: string;
}

const ExternalUrl: FunctionComponent<Props> = ({ url, className = '', children }) => (
  <Link
    color='initial'
    className={className}
    href={url}
    target="_blank"
    rel="noreferrer" >
    {children}
  </Link >
);

export default ExternalUrl;
