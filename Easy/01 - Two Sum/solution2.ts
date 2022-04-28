// brute force with O(n^2)
// Runtime: 211 ms
// Memory Usage: 44.2 MB

function twoSum2(nums: number[], target: number): number[] {
  if (nums.length == 2) return [0, 1];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) return [i, j];
    }
  }
}
