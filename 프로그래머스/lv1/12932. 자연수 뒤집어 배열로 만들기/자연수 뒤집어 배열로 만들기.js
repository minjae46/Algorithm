function solution(n) {
    let revArrStr = n.toString().split('').reverse();
    
    let revArrNum = [];
    for (let i=0; i<revArrStr.length; i++) {
        revArrNum.push(Number(revArrStr[i]))
    } 
    return revArrNum
}