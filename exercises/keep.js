'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 function keepFirst (str) {
 	str = str.slice(0, 2);
 	return str;
 }

 function keepLast (str) {
 	str = str.slice(str.length -2, str.length)
 	return str;
 }

function keepFirstLast (str) {
	str = str.slice(2, 4)
	return str;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('aahelloaa'), 'aa')
assert.deepStrictEqual(keepFirst('rrcoucourr'), 'rr')
assert.deepStrictEqual(keepFirst('22cou   couEE'), '22')
assert.deepStrictEqual(keepLast('aahelloaa'), 'aa')
assert.deepStrictEqual(keepLast('rrcoucourr'), 'rr')
assert.deepStrictEqual(keepLast('22cou   couEE'), 'EE')

assert.deepStrictEqual(keepFirstLast('aahelloaa'), 'he')
assert.deepStrictEqual(keepFirstLast('rrcoucourr'), 'co')
assert.deepStrictEqual(keepFirstLast('22cou   couEE'), 'co')
