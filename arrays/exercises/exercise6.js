function oddLengths(arr) {
  let lengths = arr.map(str => str.length);
  return lengths.filter(length => length % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));