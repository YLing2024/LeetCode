//https://leetcode.cn/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

示例 1：

输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
示例 2：

输入：n = 25
输出：1389537
 

提示：

0 <= n <= 37
答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
 */
//开始解题
//1. dp[i]表示第i个泰波那契数列
// 2. 递推公式题目都给了,dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
function tribonacci(n: number): number {
    const dpArr = new Array(n + 1).fill(0);
    dpArr[0] = 0;
    dpArr[1] = 1;
    dpArr[2] = 1;
    for (let i = 3; i <= n; i++) {
        dpArr[i] = dpArr[i - 1] + dpArr[i - 2] + dpArr[i - 3];
    }
    return dpArr[n];
}
