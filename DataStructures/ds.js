const { Stack } = require('./stack/stack.js');
const { Queue } = require('./queue/queue.js');
const { LinkedList } = require('./linkedlist/linkedlist');
const { DoubleLinkedList } = require('./double-linkedlist/double-linkedlist');
const { BinarySearchTree } = require('./tree/binarysearchtree/binarysearchtree');

module.exports.DS = {
    Stack, Queue, LinkedList, DoubleLinkedList, BinarySearchTree
}