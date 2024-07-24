```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

In this example, `1` will be output to the console.

The invocation of the `foo()` function on line 6 has no influence on this output. Although there appears to be a reassignment of `bar` within the function, this is actually a new variable declaration for a separate `bar`. When searching for a value for `bar` on line 7, the program only locates the global variable declared on line 1.