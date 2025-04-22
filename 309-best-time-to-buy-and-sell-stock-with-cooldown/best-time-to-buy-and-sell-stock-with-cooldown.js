/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // let cooldownCheck = 0

    // let profit = 0

    // let buy = prices[0]
    // // let sold = 0

    // for(let i=0; i<prices.length - 1; i++){
    //     for(let j=i +1; j<prices.length; j++){

    //     }
    // }
    // for(let price in prices){

    // }

    let n = prices.length

    let maxProfitForHoldOfStock = -prices[0]
    let maxProfitForSoldOfStock = 0
    let maxProfitForNotHoldingStockAndNotInCooldwon = 0

    for(let i=1; i<prices.length; i++){
        const prevHoldProfit = maxProfitForHoldOfStock
        const prevSoldProfit = maxProfitForSoldOfStock
        const prevProfitForNotHoldingStock = maxProfitForNotHoldingStockAndNotInCooldwon

        maxProfitForHoldOfStock = Math.max(prevHoldProfit, prevProfitForNotHoldingStock - prices[i])

        maxProfitForSoldOfStock = prevHoldProfit + prices[i]

        console.log('prices', prices[i], ' i ', i, 'prevSoldProfit ', prevSoldProfit, ' prevProfitForNotHoldingStock ', prevProfitForNotHoldingStock  )

        maxProfitForNotHoldingStockAndNotInCooldwon = Math.max(prevProfitForNotHoldingStock, prevSoldProfit)
    }
    
    
    return Math.max(maxProfitForSoldOfStock, maxProfitForNotHoldingStockAndNotInCooldwon)
    // [] maxProfitForHoldOfStock
    // []maxProfitForSoldOfStock
    // []maxProfitForNotHoldingStockAndNotInCooldwon

    // 1 -> hold a stock 0th day or maxProfitForNotHoldingStockAndNotInCooldwon - price
    // 1 -> hold[i-1] + prices[i]
    // 1 ->  maxProfitForNotHoldingStockAndNotInCooldwon[i-1]

    // let n= prices.length
    // let holdStockArray = Array(n).fill(0)
    // let soldStockArrray = Array(n).fill(0)
    // let cooldownArray = Array(n).fill(0)

    // const hold = -prices[0]
    // const sold = 0
    // const cooldown = 0

    // for(let i= 1; i<prices.length;  i++){
    //     holdStockArray[i] = Math.max(holdStock[i-1], rest)

    //     holdStock = Math.max(prevHoldStock, )
    // }

    // // for(let price of prices){
    // //     let previousSold = soldStock

    // //     soldStock = holdStock + price

    // //     holdStock = 
    // }
};

// [1,2,3,0,2]

// hold(help, )
//   hold sold restDay
// 1  -1   0
// 2. -1
// 3
// 0
// 2