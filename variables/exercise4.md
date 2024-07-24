```js
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
```

In this example, 3 lines will output: `Good Morning, Victor`, `Good Afternoon, Victor`, and `Good Evening, Victor`. Afterwards, however, a `TypeError` exception will be thrown as the constant variable `NAME` was attempted to be reassigned. Because constants represent values that cannot be changed, and there was an attempt to reassign on line 6, the error was thrown.