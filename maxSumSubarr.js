/*Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([4,2,1,6,2], 4) // 13
maxSubarraySum([], 4) // null
*/

//Brute force
function maxSubarrSum(arr, size) {
    if (size > arr.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - size + 1; i++) {

        let currentSum = 0;

        for (let j = i; j < size + i; j++){
            currentSum += arr[j];
        }
        if (currentSum > max) {
            max = currentSum;
        }
    }
    return max;
}
//time complexity O(n^2) bc of nested loops

