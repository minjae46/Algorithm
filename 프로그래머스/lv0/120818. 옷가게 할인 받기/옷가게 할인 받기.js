function solution(price) {
    let answer = 0;
    if (price >= 0 && price < 100000) {
        answer = price;
    } else if (price >= 100000 && price < 300000) {
        answer = price*0.95;
    } else if (price >= 300000 && price < 500000) {
        answer = price*0.90;
    } else if (price >= 500000 && price <= 1000000) {
        answer = price*0.8;
    } 
    answer = Math.floor(answer);
    return answer
}