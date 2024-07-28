let obj = {
  b: 2, 
  a: 1,
  c: 3,
}

let loudKeys = Object.keys(obj).map(key => key.toUpperCase());

console.log(loudKeys);
console.log(obj);