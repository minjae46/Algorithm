function solution(a, b, flag) {
    let answer;
    if(flag === true) {
        answer = a + b;
    } else {
        answer = a - b; 
    }
    return answer;
}