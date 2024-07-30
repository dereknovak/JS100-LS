function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber('hello world') === false);
console.log(isNotANumber('5234234') === false);
console.log(isNotANumber(NaN) === true);
console.log(isNotANumber(true) === false);