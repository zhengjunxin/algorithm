// 归并排序
function mergeSort(array) {
    if (array.length < 2) {
        return array
    }
    const middle = ~~(array.length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle))
    // 不断的分解到 1 个元素后，返回
    // 在 merge 中合并 2 个已经排好序的数组
    return merge(left, right)
}

function merge(left, right) {
    const result = []
    let l = 0
    let r = 0

    while(l < left.length && r < right.length) {
        // 把小的元素推入结果中
        if (left[l] < right[r]) {
            result.push(left[l++])
        }
        else {
            result.push(right[r++])
        }
    }
    // 最终有一组没有元素，一组还有元素。这里直接 concat
    return result.concat(left.slice(l), right.slice(r))
}

console.log(mergeSort([3, 2, 1]))