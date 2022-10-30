function solution(n) {
    const revStrArr = n.toString().split('').reverse();
    let revNumArr = [];
    for (let i=0; i<revStrArr.length; i++) {
        revNumArr.push(Number(revStrArr[i]))
    } 
    return revNumArr;
}