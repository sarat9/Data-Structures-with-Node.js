

// Queue DATA STRUCTURE
// queue with array

class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(element) {
        // adding element to the queue - first element of the array
        this.items.unshift(element);
    }

    dequeue() {
        // removing element from the queue - last element of the array
        // returns underflow when called on empty queue 
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    front() {
        // returns the Front element of the queue without removing it. 
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // return true if stack is empty 
        return this.items.length == 0;
    }

}

module.exports.Queue = Queue;
