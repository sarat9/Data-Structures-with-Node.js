
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(arrayItems, left, right) {
  var pivot = arrayItems[Math.floor((right + left) / 2)];
  var i = left, j = right;
  console.log("pivot index ", pivot, " with element ", arrayItems[pivot]);

  while (i <= j) {
    while (arrayItems[i] < pivot) {
      i++;
    }
    while (arrayItems[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arrayItems, i, j);
      i++;
      j--;
    }
    console.log("each swap loop ", arrayItems)
  }
  return i;
}

function quickSort(arrayItems, left, right) {
  var index;
  if (arrayItems.length > 1) {
    console.log("each partition ", arrayItems)
    index = partition(arrayItems, left, right);

    if (left < index - 1) {
      quickSort(arrayItems, left, index - 1);
    }

    if (index < right) {
      quickSort(arrayItems, index, right);
    }
  }
  return arrayItems;
}

module.exports.QuickSort = function (unSortedArray) {

  console.log("Quick Sort");
  //unSortedArray = [1, 9, 2, 3, 4, 5, 6, 7, 8, 10];
  console.log("The UnSorted Array is : ", unSortedArray);
  var sortedArray = quickSort(unSortedArray, 0, unSortedArray.length - 1);
  console.log("The Quick-Sort Sorted Array :", sortedArray)
  return sortedArray;
}   
