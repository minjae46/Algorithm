function solution(n)
{
    const D = n.toString().split('');
    const B = D.map(el => {return parseInt(el)})
    const result = B.reduce((acc, cur) => {return acc + cur});
    return result;
}