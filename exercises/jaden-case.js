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

let ArrayOfWOrd = []
let word = ""
let sentence2 = []


function jadenCase (sentence) {

	sentence2 = []

	ArrayOfWOrd = sentence.split(' ');


	for (let i = 0; i < (ArrayOfWOrd.length); i+=1) {

		
		word = ArrayOfWOrd[i]
		word = word.substr(0,1).toUpperCase() + word.substr(1,word.length).toLowerCase()

		//console.log(word)

		sentence2[i] = word

		//console.log(sentence2.join(" "))
	}
 	
 	return sentence2.join(" ");

 	
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str yo the ffff'), 'Str Yo The Ffff')
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(jadenCase('saLUT les amis !'), 'Salut Les Amis !')

// End of tests */