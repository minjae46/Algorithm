function solution(n) {
    let answer = 0; 
    let num = Math.sqrt(n);
    if (Number.isInteger(num)) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}