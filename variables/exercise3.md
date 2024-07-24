```js
{
  let foo = 'bar';
}

console.log(foo);
```

When running this program, a `ReferenceError` exception will be thrown as the `foo` variable was not declared within the main block. Although `foo` was declared and assigned to `'bar'` on line 2, this is within a separate block and is therefore inaccessible due to variable scoping rules.