const { Stack } = require('./stack/stack.js');
const { Queue } = require('./queue/queue.js');
const { LinkedList } = require('./linkedlist/linkedlist');
const { DoubleLinkedList } = require('./double-linkedlist/double-linkedlist');
const { BinarySearchTree } = require('./tree/binarysearchtree/binarysearchtree');
const { DirectedGraphList } = require('./graphs/directed-graph-list/directed-graph-list');
const { DirectedGraphListnode } = require('./graphs/directed-graph-listnode/directed-graph-listnode');
const { WeightedDirectedGraph } = require('./graphs/weighted-directed-graph/weighted-directed-graph');

module.exports.DS = {
    Stack, Queue, LinkedList, DoubleLinkedList, BinarySearchTree,
    DirectedGraphList, DirectedGraphListnode,
    WeightedDirectedGraph
}