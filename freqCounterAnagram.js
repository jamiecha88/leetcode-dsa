/*

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Note: You may assume the string contains only lowercase alphabets. Assume all inputs have no spaces, periods, or numbers; Not case sensitive

Examples
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat", "car") // false)
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

*/

//brute force
function validAnagram(first, second) {
	if (first.length !== second.length){
		return false
	}
	const obj = {}

	for (let i = 0; i < first.length; i++) {
		let letter = first[i] //stores currently looping letter in string 'first'
		obj[letter] ? obj[letter] += 1 : obj[letter] = 1
	}
	//console.log(lookup)
	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		if (!obj[letter]) {//can't find letter OR letter is 0, then not an anagram
			return false
		} else { // {z: 1, m: 0}
			obj[letter] -= 1
		}
	}
	return true
}

//refactored
function validAnagram(first, second){
	if (first.length !== second.length) {
		return false
	}

	const lookup = {} //frequency counter; constructing an object for comparison

	for (let i = 0; i < second.length; i++){ //loop through the first string
		let letter = first[i] //stores currently looping letter value in string 'first'
		lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
		//if letter exists, increment (else, set to 1)
			//If letter exists in the lookup object? Plus 1 to the value (a: 1 -> a: 2)
			//Or if letter does NOT exist? Initialize with 1 (a: 0 -> a: 1)
	}

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		//can't find letter OR letter is zero..then its not an anagram
		if (!lookup[letter]) { //checks if second[i] exists inside 'lookup' object
			return false;
		}else{
			lookup[letter] -= 1
		}
	}
	return true;
}