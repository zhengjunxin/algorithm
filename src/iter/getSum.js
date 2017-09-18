var getSum = (data, n, sum) => {
    var iter = (arr, data, n, sum) => {
        if (n === 0 && sum === 0) {
            return [arr]
        }
        else if (n === 0 || sum === 0 || data.length === 0) {
            return []
        }
        else {
            return [
                ...iter([...arr, data[0]], data.slice(1), n - 1, sum - data[0]),
                ...iter(arr, data.slice(1), n, sum),
            ]
        }
    }

    return iter([], data, n, sum)
}

console.log(getSum([0, 1, 2, 3], 2, 3))