function solution(i, j, k) {
    let numArr = [];
    for(let l=i; l<=j; l++) {
        numArr.push(l)
    }
    //i부터 j까지의 숫자 배열을 만든다
    
    let allArr = [];
    for(let m=0; m<numArr.length; m++) {
        let strNum = numArr[m].toString().split('')
        allArr.push(...strNum)
    }
    //숫자 배열 요소의 모든 각 자릿수가 문자로 담긴 배열을 만든다
    
    let count = 0;
    for(let o of allArr) {
        if(o === k.toString()) {
            count++;
        }
    }
    return count;
}