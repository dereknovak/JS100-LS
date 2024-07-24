```js
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
```

This example will not log anything to the console. Due to the explicit `return` on line 3, the function short-circuits before the `console.log` statement is executed.