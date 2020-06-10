import { FunctionComponent } from "react";
import Link from "@material-ui/core/Link";

interface Props {
  readonly url: string;
}

const ExternalUrl: FunctionComponent<Props> = ({ url, children }) => (
  <Link href={url} target="_blank" rel="noreferrer">{children}</Link>
);

export default ExternalUrl;
