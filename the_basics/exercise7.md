```js
let foo = ['a', 'b', 'c'];
console.log(foo.length); // => 3
console.log(foo[3]);     // will this result in an error?
```

Line 3 will *not* result in an error, but instead will log `undefined`. This is because arrays in JavaScript are zero-indexed, and there are only 3 elements in the object. Therefore, no value has been assigned at index 3 and `undefined` is returned and logged to the console.