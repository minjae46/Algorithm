function solution(n) {
    const nStrArr = n.toString().split('');
    const nNumArr = nStrArr.map(el => {return parseInt(el)})
    const result = nNumArr.reduce((acc, cur) => {return acc + cur});
    return result;
}