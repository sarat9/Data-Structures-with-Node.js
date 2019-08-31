
// DOUBLE LINKED LIST DATA STRUCTURE
const { DoubleLinkedListNode } = require('./double-linkedlist-node')

class DoubleLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size=0;
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
}


module.exports.DoubleLinkedList = DoubleLinkedList;