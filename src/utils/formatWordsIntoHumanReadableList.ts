const formatWordsIntoHumanReadableList = (words: string, delimiter: string) =>
  words
    .toLowerCase()
    .replace(new RegExp(delimiter, "g"), ", ")
    .replace(/,([^,]*)$/, " and$1");

export default formatWordsIntoHumanReadableList;
