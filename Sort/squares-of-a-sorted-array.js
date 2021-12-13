const sortedSquares = nums => {
  const n = nums.length;
  let negative = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negative = i;
    }
  }
  const ans = [];
  let i = negative,
    j = negative + 1;
  while (i >= 0 || j < n) {
    if (i < 0) {
      ans.push(nums[j] * nums[j]);
      j++;
    } else if (j >= n) {
      ans.push(nums[i] * nums[i]);
      i--;
    } else if (nums[i] * nums[i] < nums[j] * nums[j]) {
      ans.push(nums[i] * nums[i]);
      i--;
    } else {
      ans.push(nums[j] * nums[j]);
      j++;
    }
  }
  return ans;
};
const sortedSquares02 = nums => {
  const ans = [];
  const n = nums.length;
  for (let i = 0, j = n - 1, pos = n - 1; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      ans[pos] = nums[i] * nums[i];
      i++;
    } else {
      ans[pos] = nums[j] * nums[j];
      j--;
    }
    pos--;
  }
  return ans;
};
