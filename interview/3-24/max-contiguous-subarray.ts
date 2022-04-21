// 1. 写一个方法：传入参数是一个整数数组
// 找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 例如:
// 参数: [-2,1,-3,4,-1,2,1,-5,4]
// 结果: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

class MaximumConSubarray {

    /**
     * 将所有相邻的正数和所有相邻的负数都放到一起
     * 特殊情况，当所有的都是负数的时候。
     * @param nums 
     * @returns 
     */
    static numsFilter(nums: number[]): number[] {
        const result: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            let tempSumVal: number = nums[i];
            let j: number = i + 1;
            while (nums[i] * nums[j] > 0) {
                tempSumVal += nums[j];
                j++;
                i++;
            }
            result.push(tempSumVal);
        }
        if (result.length == 1 && result[0] < 0) {
            return [Math.max(...nums)];
        }
        return result;
    };


    static solution(nums: number[]): number {
        if (nums.length < 1) {
            return 0;
        }
        nums = MaximumConSubarray.numsFilter(nums);
        let result: number = nums[0];
        let allNegativeNumbers: number = 0;
        for (let i = 0; i < nums.length; i++) {
            // 记录是否是全负数
            if (nums[i] < 0) {
                allNegativeNumbers++;
                continue;
            }
            let tempSum = nums[i];
            let tempMaxSub = tempSum;
            for (let j = i + 1; j < nums.length; j++) {
                tempSum += nums[j];
                if (tempSum > tempMaxSub) {
                    tempMaxSub = tempSum;
                }
            }
            if (tempMaxSub > result) {
                result = tempMaxSub;
            }
        }
        if (allNegativeNumbers == nums.length) {
            return Math.max(...nums);
        }
        return result;
    };

    static solution2(nums: number[]): number {
        // 考虑优化步骤
        let n = nums.length;
        if (n === 0) {
            return 0;
        }

        let dp: number[] = [];

        dp[0] = nums[0];

        // 从1开始，因为0的时候没有子数组
        for (let index = 1; index < n; index++) {
            dp[index] = Math.max(nums[index], nums[index] + dp[index - 1]);
        }

        let result = - Number.MAX_VALUE

        for (let index = 0; index < n; index++) {
            result = Math.max(result, dp[index]);
            
        }

        return result;
    }
}
console.log(MaximumConSubarray.solution([-2,1,-3,4,-1,2,1,-5,4]) )// 6