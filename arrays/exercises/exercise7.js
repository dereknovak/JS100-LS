let array = [3, 5, 7];
function sumOfSquares(nums) {
  return nums.reduce((acc, num) => acc + (num ** 2));
}
console.log(sumOfSquares(array));