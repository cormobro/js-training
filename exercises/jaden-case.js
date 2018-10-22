'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
	let newString = "";
	for(let i = 0; i < str.length; i++){
		if((i === 0) && (str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 122)){
			newString += String.fromCharCode(str.charCodeAt(0) - 32);
		}
		else if(str[i] === " " && str.charCodeAt(i + 1) <= 122 && str.charCodeAt(i + 1) >= 97){
			newString += String.fromCharCode(str.charCodeAt(i));
			newString += String.fromCharCode(str.charCodeAt(i + 1) - 32);
			i++;
		}
		else{
			newString += String.fromCharCode(str.charCodeAt(i));
		}
	}
	return(newString);
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("voici le premier test."), 'Voici Le Premier Test.')
// End of tests */
