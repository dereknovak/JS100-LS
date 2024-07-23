```js
parseInt('3.1415')
```

This expression will return `3` as `parseInt` explicitly coerces all string digits up until a non-digit value into an integer and returns that value. In this case, `'3'` is then followed by `'.'`, which is a non-digit; therefore, only `'3'` will be coerced into `3`.