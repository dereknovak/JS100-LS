function multiply() {
  function getNum(prompt) {
    let rlSync = require('readline-sync');
    return Number(rlSync.question(prompt));
  }

  let num1 = getNum('Enter the first number: ');
  let num2 = getNum('Enter the second number: ');
  
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

multiply();