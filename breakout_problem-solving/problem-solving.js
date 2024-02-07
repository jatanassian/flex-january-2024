// Build a function that adds two numbers and gives us the sum

/**
 * PROBLEM SOLVING STEPS
 * 1. INPUT
 * 2. OUTPUT
 * 3. PROCESSING
 * */

/**
 * Sums two numbers
 *
 * @param {number} num1 - First number to add
 * @param {number} num2 - Second number to add
 * @return {number} Sum of the two params
 */
const sumTwoNums = function (num1, num2) {
	// Processing steps...
	// - Given num1 and num2
	// - Add them together, include that value in our sum
	// - Return the result number

	/* FIRST SIMPLE ANSWER
	let sum = 0;
	sum = num1 + num2;
	return sum;
	*/

	// Refactor + edge cases
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return;
	}
	return num1 + num2;
};

console.log('sumTwoNums(1, 2) =', sumTwoNums(1, 2)); // Expecting: 3
console.log('sumTwoNums(1, "hello") =', sumTwoNums(1, 'hello')); // Expecting: undefined
