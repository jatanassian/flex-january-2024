### Definition

Reusable piece of code, a block of code that performs an action.

### Related terms

- parameters: inputs of our function, placeholder for arguments
- arguments: values we passe into our function during its execution
- anonymous function
-

### Examples

```js
/**
 * Writing functions
 */

// Function declaration
function myFunction(param1, param2) {
	// Placeholder names are parameters
	// Logic goes here
	return; // Can return a value, default value is undefined
}

// Function expression
const myOtherFunction = function () {
	// We store an anonymous function in a variable
	// Logic goes here
};

// Arrow function
const myArrowFunction = (param1, param2) => 'Test';
const myArrowFunction = (param1, param2) => {
	return 'Test';
};

myFunction(123, 'hello'); // Values passed in are arguments
myArrowFunction('test', true);

// Callback example
const higherOrderFunction = function (otherFunction) {
	otherFunction();
};

higherOrderFunction(function () {
	console.log(123);
});
```
