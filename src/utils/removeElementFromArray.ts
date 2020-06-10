const removeElementFromArray = (array: Array<string>, element: string) => {
  var index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
};

export default removeElementFromArray;
