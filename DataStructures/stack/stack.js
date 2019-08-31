

// STACK DATA STRUCTURE
// stack with array

class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        //Adds an element to the stack - the last index of array
        console.log(this.items)
        this.items.push(element);
    }

    pop() {
        // Removes an element from the stack - the last element of the array
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        //prints last element of the Stack -  the last element of the array
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // return true if stack is empty 
        return this.items.length == 0;
    }

}

module.exports.Stack = Stack;
