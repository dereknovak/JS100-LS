function hello() {
  console.log('Hello there!');
}

hello();

let greet = hello;
greet();

console.log(hello);