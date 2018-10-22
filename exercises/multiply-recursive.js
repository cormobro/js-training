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
let somme = 0;
let recur = 0;
let i = 0;
function multiply(x, y){
	if(x === 0 || y === 0){
		return(0);
	}
	else if(x < 0 && y < 0){
		x = -x;
		y = -y;
		return(multiply(x, y));
	}
	else if((x > 0 && y > i) || (x < 0 && y > i)){
		somme = somme + x;
		i++;
		return(multiply(x, y));
	}
	else if(y < 0 && x > i){
		somme = somme + y;
		i++;
		return(multiply(x, y));
	}
	else{
		recur = somme;
		somme = 0;
		i = 0;
		return(recur);
	}
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
