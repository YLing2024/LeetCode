//https://leetcode.cn/problems/fibonacci-number/?envType=study-plan-v2&envId=dynamic-programming
/**
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给定 n ，请计算 F(n) 。

 

示例 1：

输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：

输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：

输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 

提示：

0 <= n <= 30
 */

//开始解题
/*
需要一个一维的dp数组，dp[i]表示第i位斐波那契数。
根据递推公式，有dp[i] = dp[i-1] + dp[i-2]
dp初始化：dp[1] = 1 , dp[2] = 1;
*/
function fib(n: number): number {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
