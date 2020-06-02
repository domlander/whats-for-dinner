const toSentenceCase = (str) => {
  str = str.toLowerCase().split(" ");
  str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
  for (var i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toLowerCase() + str[i].slice(1);
  }
  return str.join(" ");
};

export default toSentenceCase;
