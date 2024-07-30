```js
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
```

The array `[1, 4, 3]` will be logged to the console.

This occurs because, although reassignment of the second element occurs for `array1`, both `array1` and `array2` reference the same array object in memory, due to the declaration and initialization of `array2` on line 2. Because both reference the array that was mutated by the reassignment, when passing `array2` as an argument to the `log` method, its mutated value of `[1, 4, 3]` is logged to the console.