```js
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
```

This example will log `Not Empty` to the console.

Although the array object passed in as an argument is indeed empty, an array object of any kind, including empty, is considered a truthy value. The `if` statement checks the truthiness of that array object, following the `if` branch if the value is truthy. Because the empty array is truthy, it follows this branch and outputs `Not Empty`.