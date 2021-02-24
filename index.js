const { sortAlgos } = require('./Sorting/sort-algos.js')
const { DS } = require('./DataStructures/ds')
const { Algos } = require('./Algorithms/algos')

console.log("Data Structures With NodeJs");

var unSortedArray = [9, 2, 5, 1, 8, 3, 4, 6, 0, 7]


//Calling Example functions
//runSortAlgos()





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

function tryDirectedGraphListExample() {
    // Directed Graph
    let graph = new DS.DirectedGraphList();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdges('A', 'B');
    graph.addEdges('A', 'D');
    graph.addEdges('B', 'D');
    graph.addEdges('B', 'C');
    graph.addEdges('D', 'A');
    graph.depthFirstTraverse();
    graph.breadthFirstTraverse('A');
}


function tryDirectedGraphnodeListExample() {
    // Directed Graph with Node Object Implementation
    let graph = new DS.DirectedGraphListnode();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdges('A', 'B');
    graph.addEdges('A', 'D');
    graph.addEdges('B', 'C');
    graph.addEdges('B', 'D');
    graph.depthFirstTraverse();
    graph.breadthFirstTraverse('A');
}



function tryWeightedDirectedGraphListExample() {
    // Weighted Directed Graph
    let graph = new DS.WeightedDirectedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdges('A', 'B', 10);
    graph.addEdges('A', 'D', 20);
    graph.addEdges('B', 'C', 5);
    graph.addEdges('B', 'D', 8);
    graph.print()
    graph.depthFirstTraverse();
    graph.breadthFirstTraverse('A');
}

function tryPriorityQueueWithLinkedList() {
    //Priority Queue with Linked List 
    let priorityQueue = new DS.PriorityQueueLL();
    priorityQueue.enqueue("sarat", 20);
    priorityQueue.enqueue("chandra", 10);
    priorityQueue.enqueue("E", 30);
    priorityQueue.enqueue("Hello", 7);
    priorityQueue.print();
    console.log(priorityQueue.dequeue());
    priorityQueue.print();
}



function tryBinaryMinHeapExample() {
    // Binary Max Heap
    let binaryMinHeap = new DS.BinaryMinHeap();
    binaryMinHeap.insert(1);
    binaryMinHeap.insert(2);
    binaryMinHeap.insert(7);
    binaryMinHeap.insert(8);
    binaryMinHeap.insert(20);
    binaryMinHeap.insert(18);
    binaryMinHeap.insert(14);
    binaryMinHeap.insert(30);
    binaryMinHeap.insert(23);
    console.log(binaryMinHeap.heap);
    console.log(binaryMinHeap.extractMin());
    console.log(binaryMinHeap.heap);
    binaryMinHeap.deleteIndex(1)
    console.log(binaryMinHeap.heap);
}

function tryBinaryMaxHeapExample() {
    // Binary Max Heap
    let binaryMaxHeap = new DS.BinaryMaxHeap();
    binaryMaxHeap.insert(1);
    binaryMaxHeap.insert(2);
    binaryMaxHeap.insert(7);
    binaryMaxHeap.insert(8);
    binaryMaxHeap.insert(20);
    binaryMaxHeap.insert(18);
    console.log(binaryMaxHeap.heap);
    console.log(binaryMaxHeap.extractMax());
    console.log(binaryMaxHeap.heap);
    binaryMaxHeap.deleteIndex(1)
    console.log(binaryMaxHeap.heap);
}


function tryPriorityQueuewithHeapExample() {
    // Priority Queue with HEAP - efficient
    let priorityQueue = new DS.PriorityQueue();
    priorityQueue.enqueue("A", 20);
    priorityQueue.enqueue("B", 9);
    priorityQueue.enqueue("C", 39);
    priorityQueue.enqueue("D", 36);
    priorityQueue.enqueue("E", 76);
    priorityQueue.enqueue("F", 6);
    priorityQueue.enqueue("G", 17);
    priorityQueue.enqueue("H", 2);
    priorityQueue.enqueue("I", 98);
    priorityQueue.enqueue("J", 10);
    console.log(priorityQueue.heap);
    priorityQueue.print();
    console.log("Dequeued", priorityQueue.dequeue());
    priorityQueue.print();
}

function tryDijkstraAlgorithm() {
    // Dijkstra Algorithm on Weighted Directed Graph
    let graph = new DS.WeightedDirectedGraph();
    graph.addVertex('start');
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('finish');
    graph.addEdges('start', 'A', 5);
    graph.addEdges('start', 'B', 2);
    graph.addEdges('A', 'C', 4);
    graph.addEdges('A', 'D', 2);
    graph.addEdges('B', 'A', 8);
    graph.addEdges('B', 'D', 7);
    graph.addEdges('C', 'D', 6);
    graph.addEdges('C', 'finish', 3);
    graph.addEdges('D', 'finish', 1);
    graph.print()
    Algos.DijkstraAlgo(graph)
}

// tryDijkstraAlgorithm()