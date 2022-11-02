function solution(left, right) {
    let allNumArr = [];
    for (let i=left; i<=right; i++) {
        allNumArr.push(i)
    }
    
    let divisorNumArr = [];
    for (let i=0; i<allNumArr.length; i++) {
        let count = 0;
        for (let j=1; j<=allNumArr[i]; j++) {
            if (allNumArr[i]%j === 0) {
                count++;
            }
        }
        divisorNumArr.push(count)
    }
    
    let answer = 0;
    for (let i=0; i<divisorNumArr.length; i++) {
        if (divisorNumArr[i]%2 == 0) {
            answer += allNumArr[i]
        } else {
            answer -= allNumArr[i]
        }
    }
    
    return answer;
}