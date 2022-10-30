function solution(n) {
    const nArr = n.toString().split('');
    const nNumArr = nArr.map(el => {return parseInt(el)})
    const result = nNumArr.reduce((acc, cur) => {return acc + cur});
    return result;
}