```js
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
```

This code does not produce an error, despite not containing all 3 aspects of a `for` loop. These components are optional, and although the value incrementation is not included in its components, the value `i` is still incremented in the block's body, so the conditional `i < 5` can still no longer be met and the the `for` loop eventually terminated.

This code will output `1`, `2`, `3`, `4`, and `5` on separate lines.