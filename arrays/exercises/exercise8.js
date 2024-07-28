let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, str) => {
    if (str.length % 2 === 1) {
      filteredNumbersArray.push(str.length);
    }

    return filteredNumbersArray;
  }, []);
}

console.log(oddLengths(arr));