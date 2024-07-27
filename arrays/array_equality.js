function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let unequalElements = arr1.filter((element, idx) => element !== arr2[idx]);
  return !!(unequalElements.length === 0);
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]) === true);
console.log(arraysEqual([1, 2, 3], [4, 5, 6]) === false);
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]) === false);