/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.90%)
 * Total Accepted:    355.6K
 * Total Submissions: 1.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
	if (nums.length < 3) {
		return result;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});

    for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			break;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
            var first = nums[i];
            var second = nums[j];
            var third = nums[k];
			if (first + second + third === 0) {
                result.push([first, second, third]);
                
				j++;
				k--;
				while (j < k && nums[j] == second) {
					j++;
				}
				while (j < k && nums[k] == third) {
					k--;
				}
			} else if (first + second + third > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
    return result;
};
