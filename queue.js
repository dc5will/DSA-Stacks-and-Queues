'use strict';

// A Queue is a data structure that models a FIFO (First In First Out) operation. Think fast food service.
// Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is the 1st element used for processing
// Main functions of a queue = enqueue(data) and dequeue()


// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null; // beginning of queue
        this.last = null; // end of queue
    }
    // Insertion operation in a queue is limited to only 1 place, the END of the queue.
    // Since we are adding items only at 1 place, the end of the queue, the time complexity of inserting in a queue is constant, O(1).
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        // make the new node the last item on the queue
        this.last = node;
    }
    // The removal operation in a queue is limited to only 1 place as well, the BEGINNING of the queue. Time complexity is also constant, O(1).
    dequeue() {
        // if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        // if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }

}