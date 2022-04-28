// Simplest way with findIndex
// Runtime: 1082 ms
// Memory Usage: 45.1 MB
// Slow af

function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; ++i) {
    let isIndexB = nums.findIndex(
      (num) => num == target - nums[i] && nums.indexOf(num) !== i
    );
    if (isIndexB != -1) {
      return [i, isIndexB];
    }
  }
}
