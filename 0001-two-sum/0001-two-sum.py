class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}

        for n, num in enumerate(nums):
            diff = target - num
            if diff in seen:
                return (seen[diff], n)
            seen[num] = n

        return []