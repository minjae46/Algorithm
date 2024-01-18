function solution(numLog) {
    let answer = '';
    let ltrArr = [];
    for(let i=1; i<=numLog.length; i++) {
        if(numLog[i] - numLog[i-1] === 1) {
            ltrArr.push('w');
        } else if(numLog[i] - numLog[i-1] === -1) {
            ltrArr.push('s');
        } else if(numLog[i] - numLog[i-1] === 10) {
            ltrArr.push('d');
        } else if(numLog[i] - numLog[i-1] === -10) {
            ltrArr.push('a');
        }
    }
    answer = ltrArr.join('');
    return answer;
}