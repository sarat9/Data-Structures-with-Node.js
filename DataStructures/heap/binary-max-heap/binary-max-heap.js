
// Binary Max Heap

/** 
 * As binary heap is represented in th eform of an array:

Let ‘i’ be the index of the array,
- The parent Node of arr[i] can be fund at index arr[Math.floor((i-1)/2)]
- the left child of the element arr[i] can be found in arr[2i+1]
- the right child of the element arr[i] can be found in arr[2i+2]

*/

class BinaryMaxHeap {

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

            if (parentNode > currentNode) {
                break;
            }
            else {
                this.heap[parentIndex] = currentNode;
                this.heap[index] = parentNode;
                index = parentIndex;
            }
        }
    }

    extractMax() {
        let index = this.heap.length - 1;
        let maxElement = this.heap[0];
        this.heap[0] = this.heap[index]
        this.heap.pop();
        this.sinkDown(0)
        return maxElement;
    }

    sinkDown(index) {
        let leftChildIndex = (index * 2) + 1;
        let rightChildIndex = (index * 2) + 2;
        let largestIndex = index;

        if (index < this.heap.length && this.heap[largestIndex] < this.heap[leftChildIndex]) {
            largestIndex = leftChildIndex;
        }
        if (index < this.heap.length && this.heap[largestIndex] < this.heap[rightChildIndex]) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== index) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[largestIndex];
            this.heap[largestIndex] = temp;
            this.sinkDown(largestIndex)
        }
    }
    
    getMax() {
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

module.exports.BinaryMaxHeap = BinaryMaxHeap;