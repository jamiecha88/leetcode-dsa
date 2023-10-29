/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it’s corresponding values squared in the second array. The frequency of values must be the same.

Examples
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false
*/

//brute force

function same(arr1, arr2) {
	if(arr1.length !== arr2.length){
		return false; //arrays must be same size
	}
	for(let i = 0; i < arr1.length; i++){
		let correctIndex = arr2.indexOf(arr[i] ** 2)
		if(correctIndex === -1) {
			return false;
		}
		//console.log(arr2)
		arr2.splice(correctIndex, 1)
	}
	return true
}
//[1,2,3,2], [9,1,4,4]
//time complexity: O(n^2)


//refactored
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {} //creating new frequency counter objects
    let frequencyCounter2 = {}

    for(let val of arr1){ //for each val in array 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){ //for each val in array 2
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
		//console.log(frequencyCounter1)
		//console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
//same([1,2,3,2,5,] [9,1,4,4,11])
//[1,2,3,2,5,] -> 1:1, 2:2, 3:1, 5:1
//[9,1,4,4,11] -> 9:1, 1:1, 4:2, 11:1
//false

//two separate loops better than nested loops
