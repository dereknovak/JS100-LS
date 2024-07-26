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

Variables:
- `multiply`
- `left` (`multiply` function local variable)
- `right` (`multiply` function local variable)
- `product`
- `parseFloat`
- `question`
- `prompt`
- `left` (global variable)
- `right` (global variable)
- `getNumber`
- `console`