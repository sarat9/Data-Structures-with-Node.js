
// MERGE SORT with LINKEDLIST NUMBERS
const { DS } = require('../../DataStructures/ds')

function merge(left, right) {
    let resultList = new DS.LinkedList();
    let leftIndex = left.head, rightIndex = right.head;

    while (leftIndex && rightIndex && leftIndex.data != null && rightIndex.data != null) {
        if (leftIndex.data <= rightIndex.data) {
            resultList.add(leftIndex.data);
            leftIndex = leftIndex.next;
        } else {
            resultList.add(rightIndex.data);
            rightIndex = rightIndex.next;
        }
    }

    //last element
    while (leftIndex) {
        resultList.add(leftIndex.data);
        leftIndex = leftIndex.next;
    }
    while (rightIndex) {
        resultList.add(rightIndex.data);
        rightIndex = rightIndex.next;
    }
    resultList.printList();

    return resultList;
}



function mergeSort(linkedListData) {
    if (linkedListData.head.next == null) {
        return linkedListData;
    }

    const middle = Math.floor(linkedListData.size / 2);
    const left = linkedListData.subLinkedList(0, middle - 1);
    const right = linkedListData.subLinkedList(middle, linkedListData.size);
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

module.exports.MergeSortLinkedList = function (arg) {
    console.log("Merge Sort with LinkedList - NUMBERS");
    var unSortedLinkedList = arg;
    console.log("The UnSorted LinkedList is : ", unSortedLinkedList);
    var sortedLinkedList = mergeSort(unSortedLinkedList);
    console.log("The MergeSort with LinkedList Sorted List :", sortedLinkedList.size)
    return sortedLinkedList;
}