//https://leetcode.cn/problems/maximal-square/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

 

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'

 */
//战斗
//本题需要一个二维数组作为dp数组，dp[i][j]表示以i,j为右下角的最大正方形尺寸。
//本题目的难点是状态转移方程以及dp数组的含义问题。
//对于状态转移方程，dp[i+1][j+1] = matrix[i+1][j+1] == 1 ? min(dp[i+1][j+1],dp[i][j+1],dp[i+1][j]) + 1 : 0;
//这里直接给出状态转移方程，我会在自己博客里说一下详细的思考过程。
//初始化也很简单，第一行和第一列可以直接初始化，遇到0就是0，遇到1就是1。

function maximalSquare(matrix: string[][]): number {
    const dp: Array<Array<number>> = [];
    let maxSize = 0;
    //行初始化
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === "1") {
            dp[i] = [1];
            maxSize = 1;
        } else {
            dp[i] = [0];
        }
    }
    //列初始化
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === "1") {
            dp[0][j] = 1;
            maxSize = 1;
        } else {
            dp[0][j] = 0;
        }
    }
    //第二行开始遍历
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === "1") {
                dp[i][j] =
                    Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                if (dp[i][j] > maxSize) maxSize = dp[i][j];
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return maxSize ** 2;
}
maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
]);
