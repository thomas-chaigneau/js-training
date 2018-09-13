'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function curFirt(str) {
 	str = str.substr(2, str.length)
 	return str;
 }

 function cutLast(str) {
 	str = str.substr(0, str.length-2)
 	return str;
 }
 
 function cutFirstLast (str) {
 	
 	str = curFirt(str)
 	str = cutLast(str)
 	return str;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('aahelloaa'), 'hello')
assert.deepStrictEqual(cutFirstLast('rrcoucourr'), 'coucou')
assert.deepStrictEqual(cutFirstLast('22cou   couEE'), 'cou   cou')