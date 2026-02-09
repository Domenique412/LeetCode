/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let bestProfit = 0;

    for (let i = 0; i < prices.length; i++){
        const priceThatDay = prices[i];
        if(priceThatDay < minPrice){
            minPrice = priceThatDay
        }
        const profitSellThatDay = priceThatDay - minPrice;
        if(profitSellThatDay > bestProfit){
            bestProfit = profitSellThatDay;
        }

    }
    return bestProfit;
};