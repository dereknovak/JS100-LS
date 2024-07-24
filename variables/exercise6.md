```js
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
```

This example will *not* thrown an error, as 2 different constant variables are declared within 2 different scopes. The block defined from lines 2-4 creates a new scope that causes a constant variable shadowing between the `FOO` constants. When searching for the value on line 6, the program chooses the only constant it can find--the one initialized on line 1--and outputs its value to the console.