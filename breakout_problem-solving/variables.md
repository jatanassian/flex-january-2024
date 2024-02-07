### Definition

A container, or storage, for a value.
A way to assign data, assign a value.

### Related terms

- `const`: a variable that doesn't change (cannot be re-assigned)
- `let`: a variable that can be re-assigned
- `var`: can be reassigned like `let`
- **function-scoped**: only accessible in the function it is defined in
- **block-scoped**: within a set a curly braces

### Examples

```js
/**
 * Writing variable
 */

// Can't be reassigned, block-scoped
const name = 'bob';

// Can be reassigned, block-scoped
let myNum = 3;

// Can be reassigned, function-scoped
var myBool = true;
```
