function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        const pivotIndex = partition(array, left, right)
        // 因为 pivot 是第一部分里最大的，第二部分里最小的，所以可以不参与比较了
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }

    return array
}
// 数组分为 2 部分
// 第一部分小于 pivot 的，第二部分大于等于 pivot 的
// 返回 pivot 的位置
function partition(array, left, right) {
    const pivotIndex = right
    const pivot = array[pivotIndex]
    let i = left

    // 从 *left* 开始比较
    for (let j = left; j < right; j++) {
        // 小于则 swap 把值增加到第一部分
        // 且增加第一部分的索引值
        if (array[j] < pivot) {
            swap(array, j, i)
            i++
        }
    }
    swap(array, pivotIndex, i)

    return i
}
function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}



console.log(quickSort([2, 3, 1]))
// [1,2,3]
console.log(quickSort([5, 4, 2, 3, 1]))
// [1,2,3,4,5]