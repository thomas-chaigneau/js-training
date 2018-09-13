'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell (str) {
 	return str.toUpperCase();
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('you'), 'YOU')
assert.deepStrictEqual(yell('you are null'), 'YOU ARE NULL')
assert.deepStrictEqual(yell('you are good'), 'YOU ARE GOOD')

