
//MERGE SORT ALGORITHM

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  console.log("left- ", left, "  right- ", right);

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log("resultArray", resultArray);
  var concatinated = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

  console.log("concatinated", concatinated);

  return concatinated;
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}


module.exports.MergeSort = function (unSortedArray) {
  console.log("Merge Sort");
  // unSortedArray = [1, 9, 2, 3, 4, 5, 6, 7, 8, 10];
  console.log("The UnSorted Array is : ", unSortedArray);
  var sortedArray = mergeSort(unSortedArray);
  console.log("The Insertion-Sort Sorted Array :", sortedArray)
  return sortedArray;
};
