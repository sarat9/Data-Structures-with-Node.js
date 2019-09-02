
// PRIORITY QUEUE with LINKED LIST with Max Priority
// - returns and stores elements in most prority order.
// use heap for better efficency of priority queue

const { PriorityQueueLLNode } = require('./priorityqueue-ll-node')

class PriorityQueueLL {
    constructor() {
        this.first = null;
    }

    enqueue(data, priority) {
        let node = new PriorityQueueLLNode(data, priority);
        if (this.first === null) {
            this.first = node;
        }
        else {
            if (this.first.priority < node.priority) {
                node.next = this.first;
                this.first = node;
            }
            else {
                let current = this.first;
                let previous = null;
                while (current && current.priority >= priority) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node
            }
        }
    }

    dequeue() {
        let node = this.first;
        this.first = this.first.next;
        return node;
    }

    front() {
        // returns the Front element of the queue without removing it. 
        return this.first;
    }

    print() {
        let current = this.first;
        while (current) {
            console.log("value : ", current.data, " priority : ", current.priority);
            current = current.next;
        }
    }
}

module.exports.PriorityQueueLL = PriorityQueueLL;

