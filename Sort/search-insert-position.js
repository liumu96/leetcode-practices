const searchInsert = (nums, target) => {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = mid;
  while (left <= right) {
    const mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
