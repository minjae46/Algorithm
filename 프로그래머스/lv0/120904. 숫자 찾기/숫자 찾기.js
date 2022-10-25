function solution(num, k) {
    let numArr = num.toString().split('')
    let Idx = numArr.findIndex(el => parseInt(el) === k)
    if (Idx === -1) {
        return Idx
    } else {
        return Idx + 1 
    }
}