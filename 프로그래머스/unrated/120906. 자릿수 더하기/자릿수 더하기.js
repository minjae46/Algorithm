function solution(n) {
    const nArr = n.toString().split('');
    let sum = 0;
    for (let i in nArr) {
        sum = sum + Number(nArr[i]);
    }
    return sum;
}