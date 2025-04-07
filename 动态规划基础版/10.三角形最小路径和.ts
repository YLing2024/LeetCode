//https://leetcode.cn/problems/triangle/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 

示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
示例 2：

输入：triangle = [[-10]]
输出：-10
 

提示：

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104
 

进阶：

你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 */
//开始解题
//dp[i][j]表示移动到第i层第j列的最小路径
//dp[i][j] = min(dp[i-1][j],dp[i-1][j-1]) + triangle[i][j]
//dp[0][0] = trangle[0][0]，第一列和对角线也可以直接初始化，因为第一列和对角线实际上只有一条路，不会有其他分支
function minimumTotal(triangle: number[][]): number {
    //除了前面那种通过Array.from的方式以外，还可以这样初始化
    // const dp: Array<Array<number>> = new Array(triangle.length)
    //     .fill(0)
    //     .map((item, index) => new Array(index + 1).fill(0));
    const dp: Array<Array<number>> = Array.from(
        {
            length: triangle.length,
        },
        () => new Array()
    );
    dp[0][0] = triangle[0][0]; //初始化
    //第一列初始化
    let count = dp[0][0];
    for (let i = 1; i < triangle.length; i++) {
        count += triangle[i][0];
        dp[i][0] = count;
    }
    //对角线初始化
    count = dp[0][0];
    for (let i = 1; i < triangle.length; i++) {
        count += triangle[i][i];
        dp[i][i] = count;
    }
    //开始遍历数组
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 1; j < i; j++) {
            dp[i][j] =
                Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
        }
    }

    return Math.min(...dp[triangle.length - 1]);
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
