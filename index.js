function quickSort(array) {
    let less = [];
    let greater = [];
    if(array.length < 2) {
        return array;
    }
    let basedItem = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < basedItem) {
            less.push(array[i]);
        }
        if (array[i] > basedItem) {
            greater.push(array[i]);
        }
    }

    return [...quickSort(less),basedItem, ...quickSort(greater)];
}

(() => {
    const array = [10, 1, 25, 69, 6, 47, 58, 2, 14, 78, 23, 11, 26, 29]
    console.log(quickSort(array));
})();
