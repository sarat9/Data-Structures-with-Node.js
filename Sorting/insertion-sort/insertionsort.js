


function insertionSort(unSortedArray) {
    for (var i = 0; i < unSortedArray.length; i++) {
        var temp = unSortedArray[i];
        var index = i;
        while (index > 0 && temp < unSortedArray[index - 1]) {
            unSortedArray[index] = unSortedArray[index - 1];
            index--;
        }
        unSortedArray[index] = temp;
    }
    return unSortedArray;
}




module.exports.InsertionSort = function (unSortedArray) {

    console.log("Insertion Sort");
    //unSortedArray = [9,2,5,1,8,3,4,6,0,7];
    console.log("The UnSorted Array is : ", unSortedArray);
    var sortedArray = insertionSort(unSortedArray);
    console.log("The Insertion-Sort Sorted Array :", sortedArray)
    return sortedArray;
}