
// DOUBLE LINKED LIST DATA STRUCTURE
const { DoubleLinkedListNode } = require('./double-linkedlist-node')

class DoubleLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        // Add new node
        const newNode = new DoubleLinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.previous = current;
            this.tail = newNode;
        }
        this.size++;
    }

    get(index) {
        //Retrieving data at index from the list 
        if (index >= 0) {
            let current = this.head;
            for (var i = 0; i < index; i++) {
                if (current.next == null) {
                    return "Index exceeds Linked List length";
                }
                current = current.next;
            }
            return current.data;
        }
    }

    remove(index) {
        // Removing data of index  from a linked list
        if (index === 0) {
            this.head = null;
        }
        else {
            if (index >= 0) {
                let previous = null;
                let current = this.head;
                for (var i = 0; i < index; i++) {
                    if (current.next == null) {
                        return "Index exceeds Linked List length";
                    }
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.previous = current.previous;
                current = null;
            }
        }
        this.size--;
    }

    hasLoop() {
        // Checks if the linked list HAS LOOP using Floyd's Cycle-Finding Algorithm
        // Floyd's Cycle-Finding Algorithm, also known as Tortoise and Hare Algorithm
        if (this.head == null) // list does not exist..so no loop either
            return false;

        let slow, fast; // create two references.
        slow = fast = this.head; // make both refer to the start of the list

        while (true) {

            slow = slow.next;          // 1 hop

            if (fast.next != null)
                fast = fast.next.next; // 2 hops
            else
                return false;          // next node null => no loop

            if (slow == null || fast == null) // if either hits null..no loop
                return false;

            if (slow == fast) // if the two ever meet...we must have a loop
                return true;
        }
    }
}


module.exports.DoubleLinkedList = DoubleLinkedList;