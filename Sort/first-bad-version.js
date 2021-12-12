const solution = isBadVersion => {
  return n => {
    let left = 0,
      right = n - 1;
    while (left <= right) {
      const mid = ((right - left) >> 1) + left;
      if (isBadVersion(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
