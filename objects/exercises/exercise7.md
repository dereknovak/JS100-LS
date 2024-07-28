```js
let myProtoObj = {
  foo: 1,
  bar: 2,
}

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}
```

The first code snippet will output `qux` to the console. The second, however, will output `foo`, `bar`, and `qux` on separate lines.

The difference here is that the `keys` static method deals exclusively with the calling object, in this case `myObj`, while the `for...in` loop uses both the argumented object `myObj` as well as its parent `myProtoObj`. 
