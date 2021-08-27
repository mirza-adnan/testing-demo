function analyze(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    });
    const average = sum / length;
    return {
        average,
        min,
        max,
        length,
    };
}

module.exports = analyze;
