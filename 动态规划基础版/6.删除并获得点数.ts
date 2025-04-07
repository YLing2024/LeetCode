//https://leetcode.cn/problems/delete-and-earn/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

 

示例 1：

输入：nums = [3,4,2]
输出：6
解释：
删除 4 获得 4 个点数，因此 3 也被删除。
之后，删除 2 获得 2 个点数。总共获得 6 个点数。
示例 2：

输入：nums = [2,2,3,3,3,4]
输出：9
解释：
删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。
 

提示：

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 104
 */
//开始解题

//打家劫舍的小变体，当选择了数值v之后，v-1和v-2的数值就不能选了，我们需要一个数组来统计每个数字的总额，比如3出现了3次，那么arr[3] = 3*3 = 9。此时由于3被选了，2,4就不能选，其实和打家劫舍几乎一样了就。

function deleteAndEarn(nums: number[]): number {
    const max: number = Math.max(...nums); //得到最大值
    // console.log("max", max);
    const arr: number[] = new Array(max + 1).fill(0);
    for (let v of nums) {
        arr[v] += v;
    }
    //退化为打家劫舍问题
    function rob(nums: number[]): number {
        const dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        dp[1] = nums[1] > nums[0] ? nums[1] : nums[0];
        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return dp[nums.length - 1];
    }
    return rob(arr);
}
console.log(deleteAndEarn([3, 4, 2]));
