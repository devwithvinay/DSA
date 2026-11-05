let prices = [ 1 , 7 ,6 , 2 , 4, 9]

function maxProfit(prices){
    let min = prices[0]
    let max = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i]-min >max){
            max = prices[i]-min
        }
        // update the lower min if comes ahead

        if(prices[i]<min){
            min = prices[i]
        }
    }
    return max
}
console.log(maxProfit(prices));