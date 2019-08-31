
const { MergeSort } = require('./merge-sort/mergesort.js');
const { QuickSort } = require('./quick-sort/quicksort.js');
const { InsertionSort } = require('./insertion-sort/insertionsort.js');
const { BubbleSort } = require('./bubble-sort/bubblesort.js');
const { SelectionSort } = require('./selection-sort/selectionsort.js');
const { MergeSortLinkedList } = require('./merge-sort-linkedlist/mergesortlinkedlist');

module.exports.sortAlgos = {
  MergeSort, QuickSort, InsertionSort, BubbleSort, SelectionSort, MergeSortLinkedList
}
