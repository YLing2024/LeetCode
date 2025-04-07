//https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
 

提示：

1 <= n <= 45
 * 
 */

//解题开始
/*
1. 这个动态规划题需要用到一个一维DP数组，dp[i]表示爬到第i的方法数。
2. 递推公式，显然,第i个楼梯可以由i-1和i-2两个楼梯爬上来，一共就这两种情况，所以dp[i] = dp[i-1] + dp[i-2]
3. 递推公式初始化，显然dp[1] = 1 dp[2] = 1 + 1 = 2
 */
function climbStairs(n: number): number {
    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
