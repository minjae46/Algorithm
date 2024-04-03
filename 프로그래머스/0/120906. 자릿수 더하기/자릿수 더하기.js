function solution(n) {
    const nArr = n.toString().split('');
    let sum = 0;
    for(let i of nArr) {
        sum = sum + Number(i);
    }
    return sum;
}