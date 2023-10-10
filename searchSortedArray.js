/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

EXAMPLES
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

*/

function searchArr(arr, num) {
  if (Array.isArray(arr) && typeof num === "number") {
    if (arr.length === 0) {
      //checking if inputs are valid
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
          return arr[i]; //incorrect; return index where value is located with `return i` instead
        }
      }
    }
    return -1; //if value not found in array
  } else {
    return -1; //for anything else
  }
}

console.log(searchArr([1, 2, 3, 4, 5, 6], 6)); // Expected output: 5


//input "num"..I'm looking for where this "num" is located in array.
//output: index of "num"
