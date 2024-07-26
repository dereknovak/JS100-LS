```js
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

This code snippet continues to loop indefinitely due to the `while` statement's conditional `counter = 1`. Each time the loop is run, this "conditional" is checked, which is typically an expression that returns a boolean. In this case, however, the condition is actually a variable reassignment, which reassigns the global variable `counter` to `1`, thus returning the value `1` and evaluating as true. This causes 2 things to happen:

1. The loop would run indefinitely without a `break` keyword, as `1` will always be truthy and therefore the `while` statement will continue to be executed.
2. There is a `break` keyword, but it's housed within an `if` statement that checks if the value of `counter` is greater than `2`. While the value *does* get incremented by `1` after each loop, this value is reset to `1` due to the reassignment within the `while` condition.
