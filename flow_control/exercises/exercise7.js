function bigWordsAreBig(str) {
  return str.length > 10 ? str.toUpperCase() : str;
}

console.log(bigWordsAreBig('goodbye') === 'goodbye');
console.log(bigWordsAreBig('hello world') === 'HELLO WORLD');