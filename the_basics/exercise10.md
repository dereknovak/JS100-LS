```js
'foo' === 'Foo'
```

This expression will evalue to `false`. Although the words appear to be the same, string comparison using the `===` operator is case-sensitive; therefore, the fully-lowercased `'foo'` is not the same as the string `'Foo'` and returns `false`.