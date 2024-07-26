function foo() {
  return 'hello'
}

function test() {
  if (foo()) {
    return 'bar';
  } else {
    return qux();
  }
}

console.log(test());