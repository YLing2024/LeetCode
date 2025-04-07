//https://leetcode.cn/problems/unique-paths-ii/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。

网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。

返回机器人能够到达右下角的不同路径数量。

测试用例保证答案小于等于 2 * 109。

 

示例 1：


输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
示例 2：


输入：obstacleGrid = [[0,1],[0,0]]
输出：1
 

提示：

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] 为 0 或 1
 */

//这个题和上上一个题的核心思想是一样的，只有一点点区别，障碍物的路径个数一定为0

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const dp: Array<Array<number>> = Array.from(
        {
            length: obstacleGrid.length,
        },
        () => new Array(obstacleGrid[0].length).fill(0)
    );
    //第一列初始化
    for (let i = 0; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] == 1) break;
        dp[i][0] = 1;
    }
    //第一行初始化
    for (let i = 0; i < obstacleGrid[0].length; i++) {
        if (obstacleGrid[0][i] == 1) break;
        dp[0][i] = 1;
    }
    //开始遍历，从左往右，从上往下
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] == 1) {
                continue; //维持0不动
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}
