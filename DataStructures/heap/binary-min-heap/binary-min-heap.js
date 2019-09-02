
// Binary Min Heap

/** 
 * As binary heap is represented in the form of an array:

Let ‘i’ be the index of the array,
- The parent Node of arr[i] can be fund at index arr[Math.floor((i-1)/2)]
- the left child of the element arr[i] can be found in arr[2i+1]
- the right child of the element arr[i] can be found in arr[2i+2]

*/

class BinaryMinHeap {

    constructor() {
        this.heap = [];
    }

    insert(data) {
        this.heap.push(data);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentNode = this.heap[parentIndex];
            let currentNode = this.heap[index];

            if (parentNode < currentNode) {
                break;
            }
            else {
                this.heap[parentIndex] = currentNode;
                this.heap[index] = parentNode;
                index = parentIndex;
            }
        }
    }

    extractMin() {
        let index = this.heap.length - 1;
        let minElement = this.heap[0];
        this.heap[0] = this.heap[index]
        this.heap.pop();
        this.sinkDown(0)
        return minElement;
    }

    sinkDown(index) {
        let leftChildIndex = (index * 2) + 1;
        let rightChildIndex = (index * 2) + 2;
        let smallestIndex = index;

        if (index < this.heap.length && this.heap[smallestIndex] > this.heap[leftChildIndex]) {
            smallestIndex = leftChildIndex;
        }
        if (index < this.heap.length && this.heap[smallestIndex] > this.heap[rightChildIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[smallestIndex];
            this.heap[smallestIndex] = temp;
            this.sinkDown(smallestIndex)
        }
    }

    getMin() {
        // Returns the root element of Min Heap. Time Complexity of this operation is O(1).
        return this.heap[0]
    }

    deleteIndex(index) {
        let lastElement = this.heap.length - 1;
        let deleteElement = this.heap[index];
        this.heap[index] = this.heap[lastElement]
        this.heap.pop();
        this.sinkDown(index)
        return deleteElement;
    }


}

module.exports.BinaryMinHeap = BinaryMinHeap;