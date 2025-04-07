//https://leetcode.cn/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步

示例 1

输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
 */
//开始解题
//这个明显需要二维dp数组，dp[i][j]表示走到i,j这个位置最小路径和
//这个题目有方向限制，递推公式也显而易见,dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
//第一行和第一列可以直接初始化
function minPathSum(grid: number[][]): number {
    //需要注意的是，这里不能用fill进行填充，一般来说，只有原始值才考虑使用fill进行填充，引用值使用fill填充有个大坑，可以考虑这样通过Array.from一个伪数组的方式，或者直接循环去做
    const dp: Array<Array<number>> = Array.from(
        { length: grid.length },
        () => new Array()
    );
    dp[0][0] = grid[0][0]; //第一个元素初始化
    //第一列初始化
    let count = dp[0][0];
    for (let i = 1; i < grid.length; i++) {
        count += grid[i][0];
        dp[i][0] = count;
    }
    //第一行初始化
    count = dp[0][0];
    for (let i = 1; i < grid[0].length; i++) {
        count += grid[0][i];
        dp[0][i] = count;
    }
    //遍历构造dp
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
}
