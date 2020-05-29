import MuiPagination from "@material-ui/lab/Pagination";

const Pagination = ({ count, handleClick }) => {
  return (
    <MuiPagination
      color="secondary"
      count={count}
      onChange={(_, value) => handleClick(value)}
    />
  );
};

export default Pagination;
