function max(nums) {
  let maxNum = nums[0]
  nums.forEach(num => {
    if (num > maxNum) maxNum = num
  });

  return maxNum
}

console.log(max([1, 6, 3, 2]));
console.log(max([-1, -6, -3, -2]));
console.log(max([2, 2]));