// O(n) solution using hash map
// Runtime: 92 ms (+75.73%)
// Memory Usage: 45.5 MB (+31.16%)

function twoSum3(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i])!, i];
    }
    map.set(target - nums[i], i);
  }
}
