const toSentenceCase: (str: string) => string = (str: string) => {
  let strArray = str.toLowerCase().split(" ");
  strArray[0] = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1);
  for (var i = 1; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toLowerCase() + strArray[i].slice(1);
  }
  return strArray.join(" ");
};

export default toSentenceCase;
