const { sortAlgos } = require('./Sorting/sort-algos.js')
const { DS } = require('./DataStructures/ds')

console.log("Data Structures With NodeJs");

var unSortedArray = [9, 2, 5, 1, 8, 3, 4, 6, 0, 7]


//Calling
runSortAlgos()


// Running DS and Algos with Examples

function runSortAlgos() {
    sortAlgos.MergeSort(unSortedArray);
    sortAlgos.QuickSort(unSortedArray);
    sortAlgos.InsertionSort(unSortedArray);
    sortAlgos.BubbleSort(unSortedArray);
    sortAlgos.SelectionSort(unSortedArray);
}

function tryStackExample() {
    //STACK
    var stack = new DS.Stack();
    stack.items
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.pop());
    console.log(stack);
}


function tryQueueExample() {
    //QUEUE
    var queue = new DS.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue());
    console.log(queue);
}
  
function tryBinarySearchTree() {
    //BINARY SEARCH TREE
    const binarySearchTree = new DS.BinarySearchTree();
    binarySearchTree.insert(7);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.insert(10);
    binarySearchTree.insert(1);
    binarySearchTree.remove(8);
    binarySearchTree.depthFirstTraversal();
    binarySearchTree.breadthFirstTraversal();
}

function tryDoubleLinkedListExample() {
    // DOUBLE-LINKEDLIST
    const doubleLinkedList = new DS.DoubleLinkedList();
    doubleLinkedList.add("red");
    doubleLinkedList.add("orange");
    doubleLinkedList.add("yellow");
    console.log(doubleLinkedList.get(1)); // "orange"
    console.log(doubleLinkedList.size);
    doubleLinkedList.remove(1);
    console.log(doubleLinkedList.get(1));
    console.log(doubleLinkedList.size);
}

function tryMergeSortAlgoWithLinkedList() {
    //LINKEDLIST MERGESORT Numbers
    const linkedList = new DS.LinkedList();
    linkedList.add(0);
    linkedList.add(5);
    linkedList.add(2);
    linkedList.add(1);
    linkedList.add(4);
    linkedList.add(3);
    console.log(linkedList);
    sortAlgos.MergeSortLinkedList(linkedList);
}

function tryLinkedListExample() {
    //LINKEDLIST
    const linkedList = new DS.LinkedList();
    linkedList.add("red");
    linkedList.add("orange");
    linkedList.add("yellow");
    console.log(linkedList.get(1)); // "orange"
    console.log(linkedList.size);
    linkedList.remove(1);
    console.log(linkedList.get(1));
    console.log(linkedList.size);
}




