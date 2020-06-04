const truncateLineWithEllipses = (line, size) =>
  line.length > size ? line.substring(0, size - 3) + "..." : line;

export default truncateLineWithEllipses;
