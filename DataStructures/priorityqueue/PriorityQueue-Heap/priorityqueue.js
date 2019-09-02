
// PRIORITY QUEUE with HEAP with Max Priority
//- returns and stores elements in most prority order.
// use heap for better efficency of priority queue

const { PriorityQueueNode } = require('./priorityqueue-node')

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        this.insert(value, priority)
    }

    insert(data, priority) {
        let priorityQueueNode = new PriorityQueueNode(data, priority);
        this.heap.push(priorityQueueNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentNodeIndex = Math.floor((index - 1) / 2);
            let parentNode = this.heap[parentNodeIndex];
            let currentNode = this.heap[index];

            if (parentNode.priority > currentNode.priority) {
                break;
            }
            else {
                this.heap[parentNodeIndex] = currentNode;
                this.heap[index] = parentNode;
                index = parentNodeIndex;
            }
        }
    }


    dequeue() {
        return this.extractMax()
    }

    extractMax() {
        let index = this.heap.length - 1;
        let maxPriority = this.heap[0];
        this.heap[0] = this.heap[index];
        this.heap.pop();
        this.sinkDown(0);
        return maxPriority;
    }

    sinkDown(index) {
        let currentNode = this.heap[index];
        let leftChildIndex = (index * 2) + 1;
        let rightChildIndex = (index * 2) + 2;
        let largestPriorityIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority > this.heap[largestPriorityIndex].priority) {
            largestPriorityIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[largestPriorityIndex].priority) {
            largestPriorityIndex = rightChildIndex;
        }

        if (largestPriorityIndex !== index) {
            let temp = this.heap[largestPriorityIndex];
            this.heap[largestPriorityIndex] = this.heap[index];
            this.heap[index] = temp;
            this.sinkDown(largestPriorityIndex)
        }
    }

    front() {
        if (!this.isEmpty()) {
            return this.heap[0];
        } else {
            console.error("Priority Queue doesn't have any elements")
            return null;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    print() {
        this.heap.forEach(node => {
            console.log("Node : ", node.data, " Priority : ", node.priority)
        })
    }





}

module.exports.PriorityQueue = PriorityQueue;

