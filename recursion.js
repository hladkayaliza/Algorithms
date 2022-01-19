(() => {
    let result = factorial(3)
    console.log(result)
    
})();


function factorial(value) {
    if (value === 1) {
        return 1;
    }
    return value * factorial(value - 1);
}