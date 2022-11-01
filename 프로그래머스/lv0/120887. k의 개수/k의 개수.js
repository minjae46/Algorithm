function solution(i, j, k) {
    let numArr = [];
    for (let k=i; k<=j; k++) {
        numArr.push(k)
    }
    
    let allArr = [];
    for (let l=0; l<numArr.length; l++) {
        let strNum = numArr[l].toString().split('')
        allArr.push(...strNum)
    }
    
    let count = 0;
    for (let m of allArr) {
        if (m === k.toString()) {
            count++;
        }
    }
    return count;
}