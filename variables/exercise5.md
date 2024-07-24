```js
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
```

In this example, the console will output `bar`. On line 1, the variable `foo` is initialized with the value of `'bar'`. On line 3, a new `foo` variable is initialized with the value of `'qux'`, which overshadows the earlier `foo` for the current block; however, when searching for the value to output on line 6, the `foo` assigned within the block is out of of its scope and therefore relies on the value assigned on line 1. The important distinction here is that 2 `foo` variables were created, but the line 1 `foo` is within line 6's scope and *not* line 3's scope.