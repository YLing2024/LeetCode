//https://leetcode.cn/problems/minimum-falling-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

 

示例 1：



输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
输出：13
解释：如图所示，为和最小的两条下降路径
示例 2：



输入：matrix = [[-19,57],[-40,-5]]
输出：-59
解释：如图所示，为和最小的下降路径
 

提示：

n == matrix.length == matrix[i].length
1 <= n <= 100
-100 <= matrix[i][j] <= 100
 */

//战斗
//dp[i][j]表示下降到[I][J]的最短路径
function minFallingPathSum(matrix: number[][]): number {
    const dp: Array<Array<number>> = Array.from(
        {
            length: matrix.length,
        },
        () => Array(matrix.length).fill(0)
    );
    //第一行初始化
    for (let i = 0; i < matrix.length; i++) {
        dp[0][i] = matrix[0][i];
    }
    //直接遍历，但是要注意分支处理，也可以在创建数组的时候在外面包一层，避免分支处理
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j == 0) {
                dp[i][j] =
                    Math.min(dp[i - 1][j + 1], dp[i - 1][j]) + matrix[i][j];
            } else if (j == matrix.length - 1) {
                dp[i][j] =
                    Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + matrix[i][j];
            } else {
                dp[i][j] =
                    Math.min(
                        Math.min(dp[i - 1][j - 1], dp[i - 1][j]),
                        dp[i - 1][j + 1]
                    ) + matrix[i][j];
            }
        }
    }
    return Math.min(...dp[matrix.length - 1]);
}
console.log(
    minFallingPathSum([
        [2, 1, 3],
        [6, 5, 4],
        [7, 8, 9],
    ])
);
