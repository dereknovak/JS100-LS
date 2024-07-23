let testNumber = 4936

let ones = testNumber % 10
testNumber = (testNumber - ones) / 10

let tens = testNumber % 10
testNumber = (testNumber - tens) / 10

let hundreds = testNumber % 10
testNumber = (testNumber - hundreds) / 10

let thousands = testNumber % 10

console.log(`thousands place is ${thousands}`)
console.log(`hundreds place is ${hundreds}`)
console.log(`tens place is ${tens}`)
console.log(`ones place is ${ones}`)