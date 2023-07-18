function solution(a, b) {
    let answer = 0;
    const aPlusB = Number(String(a) + String(b));
    if(aPlusB < 2*a*b) {
        answer = 2*a*b;
    } else if(aPlusB >= 2*a*b) {
        answer = aPlusB;
    }
    return answer;
}