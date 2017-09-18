// 斐波那契-递归
function fib(n) {
    if (n === 0) {
        return 0
    }
    else if (n === 1) {
        return 1
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}

// 斐波那契-迭代
function fibIter(n) {
    // a表示 Fib(n + 1)，b表示Fib(n)
    // 初始为 Fib(1) 和 Fib(0)，经过 n 次迭代后，b === Fib(n)
    function iter(a, b, count) {
        if (count === 0) {
            return b
        }
        else {
            return iter(a + b, a, count - 1)
        }
    }
    return iter(1, 0, n)
}

// 简单的增加 memo 的方法
// 如果存在 memo，则直接返回。如果不存在 memo，则照常计算，然后存在 memo 里
function fibWithMemo(n) {
    const memo = {}

    function fib(n) {
        if (memo[n] !== undefined) {
            return memo[n]
        }

        if (n === 0) {
            memo[0] = 0
            return 0
        }
        else if (n === 1) {
            memo[1] = 1
            return 1
        }
        else {
            const result = fib(n - 1) + fib(n - 2)
            memo[n] = result
            return result
        }
    }
    return fib(n)
}

const number = 40

const begin = Date.now()
fib(number)
const end = Date.now()
fibWithMemo(number)
const ee = Date.now()

console.log(end - begin, ee - end)
