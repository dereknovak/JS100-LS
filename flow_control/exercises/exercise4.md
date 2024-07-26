```js
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
```

The following code will output `Product2`, `Product3`, and `Product not found!` to the console on separate lines. This is because after following the `'113'` case branch in the `switch` statement, the code 'falls-through' to the next case statements rather than breaking from it. In this case, it falls through both the `'142'` and `default` branches, additionally logging both branches to the console.

To fix this, all branches should conclude with a `break` keyword to immediately terminate the function once a branch is followed.