const binarySearch = (nums, target) => {
  const n = nums.length;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    const mid = ((right - left) >> 1) + left;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};
