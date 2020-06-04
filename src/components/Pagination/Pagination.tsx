import MuiPagination from "@material-ui/lab/Pagination";
import { FunctionComponent } from "react";

interface Props {
  readonly count: number;
  readonly handleClick: (value: number) => Promise<void>;
}

const Pagination: FunctionComponent<Props> = ({ count, handleClick }) => {
  return (
    <MuiPagination
      color="secondary"
      count={count}
      onChange={(_, value) => handleClick(value)}
    />
  );
};

export default Pagination;
