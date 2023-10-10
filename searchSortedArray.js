/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

EXAMPLES
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
*/

function searchArr(arr, num) {
  if (Array.isArray(arr) && typeof num === 'number') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return i; // return index where the num is located
            }
        }
        return -1; // if the value is not found in the array
    } else {
        return -1; // for invalid inputs
    }
}

console.log(searchArr([1, 2, 3, 4, 5, 6], 6)); // Expected output: 5


//input "num"..I'm looking for where this "num" is located in array.
//output: index of "num"
