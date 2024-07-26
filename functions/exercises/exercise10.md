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
- `multiply` (global)
- `left` (`multiply` function local variable)
- `right` (`multiply` function local variable)
- `product` (`multiply` function local variable)
- `getNumber` (global)
- `parseFloat` (global)
- `question` (global)
- `prompt` (`getNumber` function local variable)
- `left` (global variable)
- `right` (global variable)
- `console` (global)