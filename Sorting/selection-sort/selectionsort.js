


function selectionSort(arrayData) {
    for (var i = 0; i < arrayData.length; i++) {
        var minIndex = i;
        for (var j = i; j < arrayData.length; j++) {
            if (arrayData[minIndex] > arrayData[j]) {
                minIndex = j;
            }
        }
        var temp = arrayData[i];
        arrayData[i] = arrayData[minIndex];
        arrayData[minIndex] = temp;
    }
    return arrayData;
}


module.exports.SelectionSort = function (arg) {
    console.log("Selection Sort");
    // unSortedArray = [1, 9, 2, 3, 4, 5, 6, 7, 8, 10];
    var unSortedArray = [...arg];
    console.log("The UnSorted Array is : ", unSortedArray);
    var sortedArray = selectionSort(unSortedArray);
    console.log("The Selection-Sort Sorted Array :", sortedArray)
    return sortedArray;
}