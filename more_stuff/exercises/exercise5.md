```js
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
```

The following function returns an array containing the lengths of each word in reverse order. This is achieved through *method chaining*, and is executed in this sequence:

1. `string.split(' ')` - The passed in string is split into array, with each new word being its own element.
2. `.reverse()` - The elements of the array are sorted in reverse order.
3. `.map((value) => value.length);` - The value of each element (word) in the array are changed to their length value.

Due to method chaining, each return value becomes the caller of the next method, allowing a series of method invocations to take place. This final value is returned from the function using the `return` keyword.