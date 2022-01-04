const printArray = (array) => {
    return array.forEach(element => {
        console.log(`${element}`);
    });
}

const algorithm = (array, targetItem, startIndex, endIndex) => {
    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        console.log(`Middle index: ${middleIndex}`);
        if (targetItem === array[middleIndex]) {
            return middleIndex;
        } else if (targetItem < array[middleIndex]) {
            endIndex = middleIndex - 1;
        } else if(targetItem > array[middleIndex]) {
            startIndex = middleIndex + 1;
        }
    }
}

(() => {
    console.log("Binary search");
    console.log("Array:");
    const arr = [1, 12, 5, 41, 8];
    printArray(arr);
    const targetItem = 5;
    console.log(`Target item: ${targetItem}`);
    console.log("--------------------------------");
    console.log("You should use only sorted array. Sorted array:");
    arr.sort((a,b) => {
        return a - b;
    });
    printArray(arr);
    console.log("--------------------------------");

    console.log("Define start and end index");
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let targetIndex = algorithm(arr, targetItem, startIndex, endIndex);
    console.log("--------------------------------");
    console.log(`Target index is: ${targetIndex}`);
})();
