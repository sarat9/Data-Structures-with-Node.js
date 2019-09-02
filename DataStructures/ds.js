const { Stack } = require('./stack/stack.js');
const { Queue } = require('./queue/queue.js');
const { LinkedList } = require('./linkedlist/linkedlist');
const { DoubleLinkedList } = require('./double-linkedlist/double-linkedlist');
const { BinarySearchTree } = require('./tree/binarysearchtree/binarysearchtree');
const { PriorityQueueLL } = require('./priorityqueue/PriorityQueue-LL/priorityqueue-ll');
const { PriorityQueue } = require('./priorityqueue/PriorityQueue-Heap/priorityqueue');
const { DirectedGraphList } = require('./graphs/directed-graph-list/directed-graph-list');
const { DirectedGraphListnode } = require('./graphs/directed-graph-listnode/directed-graph-listnode');
const { WeightedDirectedGraph } = require('./graphs/weighted-directed-graph/weighted-directed-graph');
const { BinaryMaxHeap } = require('./heap/binary-max-heap/binary-max-heap');
const { BinaryMinHeap } = require('./heap/binary-min-heap/binary-min-heap');

module.exports.DS = {
    Stack, Queue, LinkedList, DoubleLinkedList, BinarySearchTree,
    PriorityQueue, PriorityQueueLL,
    DirectedGraphList, DirectedGraphListnode,
    WeightedDirectedGraph,
    BinaryMaxHeap, BinaryMinHeap
}