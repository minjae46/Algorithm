function solution(price, money, count) {
    let priceArr = [];
    for (let i=1; i<=count; i++) {
        priceArr.push(i*price)
    }
    console.log(priceArr)
    const sumPrice = priceArr.reduce((a,b) => a+b)
    console.log(sumPrice)
    const diff = money - sumPrice
    console.log(diff)
    if (diff < 0 ) {
        return Math.abs(diff);
    } else {
        return 0 
    }
}