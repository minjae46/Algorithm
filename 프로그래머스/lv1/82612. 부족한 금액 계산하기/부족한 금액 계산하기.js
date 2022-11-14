function solution(price, money, count) {
    let priceArr = [];
    
    for (let i=1; i<=count; i++) {
        priceArr.push(i*price)
    }
    const sumPrice = priceArr.reduce((a,b) => a+b);
    const diff = money - sumPrice;
    
    if (diff < 0 ) {
        return Math.abs(diff);
    } else {
        return 0;
    }
}