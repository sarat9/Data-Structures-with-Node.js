
// LINKED LIST DATA STRUCTURE
const { LinkedListNode } = require('./linkedlist-node')

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        // Add new node
        const newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
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

    getNodeByIndex(index) {
        //Retrieving data at index from the list 
        if (index >= 0) {
            let current = this.head;
            for (var i = 0; i < index; i++) {
                if (current.next == null) {
                    return "Index exceeds Linked List length";
                }
                current = current.next;
            }
            return current;
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
                current = null;
            }
        }
        this.size--;
    }

    subLinkedList(startIndex, endIndex) {
        // Return New SUB LinkedList of the Linked list from start to end index
        let subList = new LinkedList();
        let initialNode = this.getNodeByIndex(startIndex);
        var i = startIndex;
        while (initialNode !== null && i <= endIndex) {
            subList.add(initialNode.data);
            initialNode = initialNode.next;
            i++;
        }
        return subList;
    }


    // prints the list items 
    printList() {
        var current = this.head;
        debugger;
        var str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        console.log("The list is : ",str);
    }

}



module.exports.LinkedList = LinkedList;