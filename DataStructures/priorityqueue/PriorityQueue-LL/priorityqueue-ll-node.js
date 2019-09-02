
// PRIORITY QUEUE with LINKED LIST with Max Priority
// use heap for better efficency of priority queue

class PriorityQueueLLNode {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

module.exports.PriorityQueueLLNode = PriorityQueueLLNode;

