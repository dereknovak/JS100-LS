```js
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello')
```

On line 6, the defined function `foo` is invoked, and is passed `'Hello'` as an argument, binding it to the function's parameter `bar`. Because only one argument is passed into the function, the second parameter `qux` does not have an assigned value and therefore defaults to `undefined`. Within the function body, both values of `bar` and `qux` are logged to the console, outputting `Hello` and `undefined` on separate lines.