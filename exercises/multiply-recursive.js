'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :



function multiply (a, b) {


	if (b < 0) {

		b=-b
		a=-a
	}

	if (b > 0) {

		b -=1;
		return a + multiply(a, b);
	}

	else if (b == 0) {
		return 0;
	}

}
//* Begin of tests
const assert = require('assert')

/*assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)*/
assert.strictEqual(multiply(5, 4), 20)
assert.strictEqual(multiply(5, 10), 50)
assert.strictEqual(multiply(10, 10), 100)
assert.strictEqual(multiply(0, 230), 0)

assert.strictEqual(multiply(5, 0), 0)
assert.strictEqual(multiply(0, 0), 0)

assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-5, 10), -50)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
assert.strictEqual(multiply(0, -230), 0)
// End of tests */
