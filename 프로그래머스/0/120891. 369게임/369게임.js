function solution(order) {
    const arr = order.toString().split('');
    let count = 0;
    for (let i of arr) {
        if(i === '3' || i === '6' || i === '9') {
            count++;
        }
    }
    return count 
}