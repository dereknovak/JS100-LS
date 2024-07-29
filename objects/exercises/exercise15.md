```js
function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');
```

Variables:

- `bar`
- `arg1`
- `arg2`
- `foo`
- `qux`
- `result`

Object Property Names:

- `abc`
- `def`
- `ghi`
- `jkl`
- `mno`
- `pqr`
- `0` (`abc`)
- `1` (`abc`)
- `2` (`abc`)
- `3` (`abc`)
- `0` (`3`)
- `1` (`3`)
- `2` (`3`)

Primitive Values:

- `'Hello'`
- `1`
- `2`
- `3`
- `4`
- `5`
- `6`
- `null`
- `NaN`
- `'Victor'`
- `'Antonina'`

Objects:

```js
{
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}
```

```js
{
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  }
```

- `[1, 2, 3, [4, 5, 6]]`
- `[4, 5, 6]`