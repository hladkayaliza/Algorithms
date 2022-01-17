(() => {
    const users = [
        { name: 'Ваня', level: 5 },
        { name: 'Саша', level: 1 },
        { name: 'Маша', level: 8 },
        { name: 'Саша', level: 2 },
        { name: 'Вера', level: 12 },
        { name: 'Саша', level: 3 },
        { name: 'Ваня', level: 30 }
    ];

    let result = selectionSort(users);
    console.log(result);

})();

function selectionSort(array) {
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let min = i;
        for (let j = i + 1; j < arrayL; j++) {
            if (array[j].level < array[min].level) {
                min = j;
            }
        }

        if (min != i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    return array;
}