/*
You are given an unsorted list of integers: [38, 27, 43, 3, 9, 82, 10]. Implement the merge sort algorithm to sort this list in ascending order.

Example:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the initial array into halves
    const mid = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort BOTH halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // Compare elements and merge the subarrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Add remaining elements from both subarrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}





//EXAMPLE 2: Merge two sorted subarrays into a single sorted array.

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    // Concatenating the leftover elements
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
        return array
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}