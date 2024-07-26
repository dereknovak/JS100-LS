```js
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718)
```

On line 6, the declared function `foo` is invoked and gets past 3 arguments: `42`, `3.1415`, and `2.718`. `foo`, however, only has 2 parameters (`bar` and `qux`), so only the first 2 arguments are bound to the 2 parameters, `42` to `bar` and `3.1415` to `qux`. The last argument, `2.718`, simply is ignored.

Within the function body, both values of function local variables `bar` and `qux` are logged to the console, outputting `42` and `3.1415` on separate lines.