function solution(a, b) {
    let answer = 0;
    sum1 = Number(String(a) + String(b));
    sum2 = Number(String(b) + String(a));
    if (sum2 > sum1) {
        answer = sum2;
    } else {
        answer = sum1;
    }
    return answer;
}