//https://leetcode.cn/problems/unique-paths/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

示例 1：


输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
 */
//开始解题
//这个题其实和跳台阶是一样的思路
//这里需要一个二维的dp数组
//dp[i][j]表示到第i行第j列的路径数量
//dp[i][j] = dp[i-1][j] + dp[i][j-1]//只有这两种可能，要么从上面过来，要么从左边过来，总路径就是他们的和
//dp初始化，第一行，第一列，均为1
function uniquePaths(m: number, n: number): number {
    const dp: Array<Array<number>> = []; //dp数组
    //dp数组初始化
    for (let i = 0; i < m; i++) {
        dp[i] = [1];
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
