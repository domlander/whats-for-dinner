import { FunctionComponent } from "react";
import Link from "next/link";
import BreadcrumbsMui from '@material-ui/core/Breadcrumbs';
import Typography from "@material-ui/core/Typography";
import styles from "./Breadcrumbs.module.scss";

type Crumb = {
  readonly text: string;
  readonly url?: string;
}

interface Props {
  readonly crumbs: Array<Crumb>;
}

const Breadcrumbs: FunctionComponent<Props> = ({ crumbs }) =>
  <BreadcrumbsMui aria-label="breadcrumb" >
    {crumbs.map(crumb =>
      crumb.url
        ? (
          <Link key={crumb.text} href={crumb.url}>
            <a>
              {crumb.text}
            </a>
          </Link>
        ) : (
          <Typography key={crumb.text} color="textSecondary">{crumb.text}</Typography>
        )
    )}
  </BreadcrumbsMui>

export default Breadcrumbs;
