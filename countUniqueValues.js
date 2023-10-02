/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Examples
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

//brute force

function countUniqueValues(arr){
	if(arr.length === 0){
			return 0
		}
	let uniqueCount = 1; //assume at least 1 unique value (first element)
	let left = 0; 

	for (let right = 1; right < arr.length; right++){
		if(arr[left] !== arr[right]){
			uniqueCount++; //to keep track of unique number count
			left = right;
			//left will be updated with the index of every unique num encountered
		}
	}
	return uniqueCount;
}


//another soln
function countUniqueValues(arr){
	if(arr.length === 0){
		return 0
	}

	let i = 0;

	for (let j = 1; j < arr.length; j++) {
		if(arr[i] !== arr[j]) {
			i++
			arr[i] = arr[j]
		}
	}
	return i + 1;
}