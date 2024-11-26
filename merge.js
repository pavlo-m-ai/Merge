function splitArray(arr) {
    const length = arr.length;
    if (length === 1) {
        return [arr];
    }
    const mid = Math.floor(length / 2);

    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid);

    const leftSplit = splitArray(firstHalf);
    const rightSplit = splitArray(secondHalf);

    return [...leftSplit, ...rightSplit];
}

function merge(arr1, arr2, ascending = true) {
    const resArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if ((ascending && arr1[i] < arr2[j]) || (!ascending && arr1[i] > arr2[j])) {
            resArr.push(arr1[i]);
            i++;
        } else {
            resArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        resArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        resArr.push(arr2[j]);
        j++;
    }

    return resArr;
}

function mergeAll(arr, ascending = true) {
    if (arr.length === 1) {
        return arr[0];
    }

    const mergedArrays = [];

    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 < arr.length) {
            mergedArrays.push(merge(arr[i], arr[i + 1], ascending));
        } else {
            mergedArrays.push(arr[i]);
        }
    }

    return mergeAll(mergedArrays, ascending);
}

const array = [9, -2, 0, 3, 8, 2, 6];
const ascending = false; 

const splitResult = splitArray(array);
const mergedArray = mergeAll(splitResult, ascending);
console.log(mergedArray);
