function factorial(end_num) {
  let product = 1;
  for (let current_num = 1; current_num <= end_num; current_num++) {
    product *= current_num
  }
  return product;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));