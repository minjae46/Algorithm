function solution(num, k) {
    let numArr = num.toString().split('')
    let Idx = numArr.findIndex(el => parseInt(el) === k)
    if (Idx === -1) {
        return Idx
    } else {
        return Idx + 1 
    }
}
//findIdex 메서드는 가장 처음 만족하는 인덱스를 반환한다.