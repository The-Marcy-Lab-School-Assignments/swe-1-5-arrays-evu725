const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const newArrayFullOf = (value, numOfValue) => {
  return Array(numOfValue).fill(value);
};

const insertIntoMiddle = (arr, value) => {
  let middle_index = Math.floor(arr.length / 2);
  arr.splice(middle_index, 0, value);
};

const deleteFromMiddle = (arr) => {
  let middle_index = Math.floor(arr.length / 2);
  arr.splice(middle_index, 1);
};

const isRightIndex = (arr, value, index) => {
  return arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(arr[i]));
  }
  return newArr;
};

const getAllYCoordinates = (arrOfCoords) => {
  let y_coord = [];

  for (let i = 0; i < arrOfCoords.length; i++) {
    y_coord.push(arrOfCoords[i][1]);
  }
  return y_coord;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
