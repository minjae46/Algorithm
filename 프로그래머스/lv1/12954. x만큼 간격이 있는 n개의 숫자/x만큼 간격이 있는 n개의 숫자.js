function solution(x, n) {
    let answer = [];
    if (x > 0) {
        for (let i=x; i<=n*x; i+=x) {
            answer.push(i)
        }
    }
    if (x < 0) {
         for (let i=x; i>=n*x; i+=x) {
            answer.push(i)
        }
    }
    if (x === 0) {
        for (let i=1; i<=n; i++) {
            answer.push(0)
        }
    }
    return answer;
}

console.log(solution(0,5))