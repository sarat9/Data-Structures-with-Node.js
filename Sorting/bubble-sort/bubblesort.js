
// BUBBLE SORT ALGORITHM


function bubbleSort(arrayData) {
    for (var i = 0; i < arrayData.length; i++) {
        for (var j = 0; j < arrayData.length; j++) {
            if (arrayData[j] > arrayData[j + 1]) {
                var temp = arrayData[j];
                arrayData[j] = arrayData[j + 1];
                arrayData[j + 1] = temp;
            }
        }
    }
    return arrayData;
}



module.exports.BubbleSort = function (arg) {
    console.log("Bubble Sort");
    // unSortedArray = [1, 9, 2, 3, 4, 5, 6, 7, 8, 10];
    var unSortedArray = [...arg];
    console.log("The UnSorted Array is : ", unSortedArray);
    var sortedArray = bubbleSort(unSortedArray);
    console.log("The Bubble-Sort Sorted Array :", sortedArray)
    return sortedArray;

}


