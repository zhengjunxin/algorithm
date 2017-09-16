// 需要额外数组的快排
function quickSort(array, start = 0, end = array.length - 1) {
    if (start < end) {
        const left = []
        const right = []
        const pivot = array[end]

        for (let i = 0 ; i < end; i++) {
            if (array[i] < pivot) {
                left.push(array[i])
            }
            else {
                right.push(array[i])
            }
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }
    return array
}

console.log(quickSort([5, 4, 2, 3, 1]))
