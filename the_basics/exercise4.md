```js
console.log('5' + 10);
```

This code logs `'510'` instead of `15` due to implicit type coercion. When either operand of the `+` operator is a string, JavaScipt automatically coerces the non-string operand into a string. The expression is now concatenting the two strings together, creating the new string `'510'`.