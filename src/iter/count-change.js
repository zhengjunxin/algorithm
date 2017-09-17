// 把问题规模分为：使用了第一种硬币；和不使用第一种硬币

// 结束状态有：
// 1、amount 到达 0，则记一种兑换方法
// 2、amount小于0，或者没有硬币了，则不算一种方法
function change(amount, coins) {
    count++
    if (amount === 0) {
        return 1
    }
    else if (amount < 0 || coins.length === 0) {
        return 0
    }
    else {
        // 问题规模为：使用了一种硬币 + 不使用一种硬币
        return change(amount - coins[0], coins) + change(amount, coins.slice(1))
    }
}

console.log(change(100, [1, 5, 10, 25, 50]))