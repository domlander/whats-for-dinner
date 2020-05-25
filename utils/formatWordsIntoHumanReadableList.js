const formatWordsIntoHumanReadableList = (words, delimiter) =>
  words
    .toLowerCase()
    .replace(new RegExp(delimiter, "g"), ", ")
    .replace(/,([^,]*)$/, " and$1");

export default formatWordsIntoHumanReadableList;
