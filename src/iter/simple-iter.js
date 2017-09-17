// 递归只要理清终止条件、一般过程即可，比较简单
function factorialRecursive(n) {
    // 定义递归的终止条件
    if (n === 1) {
        return 1
    }
    // 定义递归的过程
    else {
        return n * factorial(n - 1)
    }
}

// 迭代还要维护一个 product 结果
function factorialIterative(n) {
    function iter(count, product, n) {
        if (count > n) {
            return product
        }
        else {
            return iter(count + 1, product * count, n)
        }
    }
    return iter(1, 1, n)
}

console.log(factorialRecursive(3), factorialIterative(3)) // 6