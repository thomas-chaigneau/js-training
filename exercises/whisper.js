'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper (str) {
 	return str.toLowerCase();
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('YOU'), 'you')
assert.deepStrictEqual(whisper('YOU ARE NULL'), 'you are null')
assert.deepStrictEqual(whisper('YOU ARE GOOD'), 'you are good')
