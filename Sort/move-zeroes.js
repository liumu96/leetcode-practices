const solution = nums => {
  let len;
  if (nums === null || (len = nums.length) === 0) {
    return;
  }
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] != 0) {
      if (i > j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
  }
};
