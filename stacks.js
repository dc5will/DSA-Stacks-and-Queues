'use strict';

// Notes: Two of the most commonly used data structures in web development are stacks and queues.
// Stack = data structure similar to a list with access restricted to only 1 end. Stores elements in a LIFO (Last In First Out) order.

// Write a Stack class with its core functions (push, pop) from scratch
// Standard way to implement a stack is using a singly linked list with constraints on its operations, where items can be inserted and deleted at only 1 place, the end of the list.
// push(): places data onto the top of a stack
// pop(): removes data from the top of the stack

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// Create the constructor method for the stack. Start with an empty 1st node, represented by null and this indicates the top of the stack
class Stack {
    constructor() {
        this.top = null; // top of stack
    }
    push(data) { 
        if (this.top === null) { // if the stack is empty, then the node will be the top of the stack
            this.top = new _Node(data, null);
            return this.top;
        }
        // If the stack already has something, then create a new node, add data to the new node, and have the pointer point to the top
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        // In order to remove the top of the stack, you have to point the pointer to the next item and that next item becomes the top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

// 1. Create a stack class
// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

let starTrek = new Stack();
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
console.log(peek('peek ===', starTrek));
console.log(isEmpty('isEmpty ===', starTrek));
console.log('starTrek ===', starTrek);
console.log(display(starTrek));
// remove McCoy from stack
starTrek.pop();
starTrek.pop();
// popped twice to remove McCoy;

console.log(display(starTrek)); // returns 'Scotty' on top and 'McCoy' second

/*
2. Useful methods for a stack
implement helper functions outside of the class:
peek(): allows you to look at the top of the stack without removing it
isEmpty(): allows you to check if the stack is empty or not
display(): to display the stack - what is the 1st item in the stack
Remove McCoy from the stack and display the stack
*/

function peek(stack) {
    if (stack.top === null) { // checks if stack is empty
        return null;
    }
    // console.log('peek =', starTrek.top.data)
    return starTrek.top.data;
}

function isEmpty(stack) {
    if (stack.top === null) { // if list is empty return true;
        return true;
    } 
    return false;
}

function display(stack) {
    let node = stack.top; // set variable for top of stack
    // console.log('line 81 ===', node)
    while (node !== null) { // iterate through stack as long current node has data
        console.log('display ===', node.data); // display data inside current node
        node = node.next; // move to next node
    }
}

// 3. Check for palindromes using a stack
// Write an algorithm that uses a stack to determine whether a given input is palindrome or not.
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let newStack = new Stack();
    for (let i = 0; i < s.length; i++) {
        newStack.push(s[i]);
    }

    let newString = '';
    for (let i = 0; i < s.length; i++) {
        newString += newStack.pop();
    }
    console.log('newstring =', newString)
    console.log('s =', s)
    return newString === s;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("William"));

// 4. Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".


// 5. Sort Stack
// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

function sort(stack) {
    let tempStack = new Stack();
    let tempValue;

    while(!isEmpty(stack)) { // when stack isnt empty
        tempValue = stack.pop(); // remove nodes from stack

        while(peek(tempStack) > tempValue && tempStack.top !== null) {
            // if top of stack is greater than tempStack, then add it to stack
            stack.push(tempStack.pop());
        }
        tempStack.push(tempValue);
    }

    while(!isEmpty(tempStack)) {
        stack.push(tempStack.pop());
    }
    // console.log('stack ===', stack);
    return stack;
}

let sortInput = new Stack();
sortInput.push(12);
sortInput.push(24);
sortInput.push(55);
// sortInput.push(2);
// console.log(sortInput);
console.log(sort(sortInput));





