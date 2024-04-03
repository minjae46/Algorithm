function solution(n) {
    let answer = [];
    for (let i=1; i<=n; i++) {
        if (n%i === 0) {
            answer.push(i)
        }
    }
    return answer;
}
// 약수: 나누었을때 나머지 없이 나누어 떨어지는 수