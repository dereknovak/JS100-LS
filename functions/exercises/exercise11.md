```js
function multiply(left, right) {
  let product = left * right;
  return product
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
```

These are *not* the same variables. The `left` and `right` variables on lines 1 and 2 are **local** variables to the function `multiply`. These variables only exist within the scope of the function, and are both created and terminated at the time of the function's invocation.

The `left` and `right` variables on lines 10 and 11 are **global** variables, meaning that they are available throughout the entirety of the program (after the point of declaration). For this reason, although they share the same name, the variables exist separately from each other and contain different values.