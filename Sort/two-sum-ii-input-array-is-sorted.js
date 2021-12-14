const solution = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};
