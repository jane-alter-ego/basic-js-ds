const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = []; // Initialize an empty array to store stack elements
  }

  push(element) {
    this.stack.push(element); // Add the element to the top of the stack
  }

  pop() {
    if (this.stack.length === 0) {
      return undefined; // Return undefined if the stack is empty
    }
    return this.stack.pop(); // Remove and return the top element
  }

  peek() {
    if (this.stack.length === 0) {
      return undefined; // Return undefined if the stack is empty
    }
    return this.stack[this.stack.length - 1]; // Return the top element without removing it
  }
}

module.exports = {
  Stack
};
