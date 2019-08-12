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

console.log(starTrek); // returns 'Scotty' on top and 'McCoy' second



